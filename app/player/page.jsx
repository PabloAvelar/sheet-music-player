"use client";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';
import { useSearchParams } from 'next/navigation'
import midiService from "../../services/midiService";


function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [midiFile, setMidiFile] = useState(false);
  const playerRef = useRef(null);
  const audioContextRef = useRef(null);
  const instrumentRef = useRef(null);
  const searchParams = useSearchParams();
  const notesRef = useRef({});

  const requestMidiFile = async () => {
    const id_midifile = searchParams.get('midifile')
    const data = { id_midifile: id_midifile };

    try {
      const res = await midiService.retrieveMidiFile(data);
      setMidiFile(res);
      console.log("BINARIO!!!")
      console.log(res);
      playerRef.current.loadArrayBuffer(res);

    } catch (error) {
      console.error("Ha ocurrido un error al cargar el midi al player", error);
    }
  }

  useEffect(() => {
    requestMidiFile()

    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    Soundfont.instrument(audioContextRef.current, 'acoustic_grand_piano').then((instrument) => {
      instrumentRef.current = instrument;
      console.log('Instrument loaded');
    });

    playerRef.current = new MidiPlayer.Player((event) => {
      console.log("evento")
      console.log(event)
      if (event.name === 'Note on' && instrumentRef.current) {

        // Cambiando a un nombre de nota correcto
        event.noteName = event.noteName.replace("-", "");

        console.log(`Playing note: ${event.noteName}`);
        if (audioContextRef.current.state === 'suspended') {
          audioContextRef.current.resume();
        }
        instrumentRef.current.play(event.noteName, audioContextRef.current.currentTime,
          { gain: event.velocity / 100 });
        playKey(event.noteName);

      } else if (event.name === 'Note off' && instrumentRef.current) {
        console.log("EVENTOW WEY");
        console.log(event);
        console.log(`Stopping note: ${event.noteName}`);
        //instrumentRef.current.stop(event.noteName);
        stopKey(event.noteName);
      }
    });

    // const arrayBuffer = midiFile.arrayBuffer();
    // playerRef.current.loadArrayBuffer(midiFile);



    // fetch('/16d3eabf-d7e2-45ad-a5fd-3a22a1188054.mid')
    // fetch('/twinkle.MID')
    // fetch('http://localhost:8000/api/v1/retrievemidifile/', {
    //   method: "POST",
    //   body: JSON.stringify(
    //     {
    //       id_midifile: searchParams.get('midifile')
    //     }
    //   ),
    // })
    //   .then(response => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.arrayBuffer();
    //   })
    //   .then(data => {
    //     playerRef.current.loadArrayBuffer(data);
    //     console.log('MIDI file loaded');
    //   })
    //   .catch(error => {
    //     console.error('Error loading MIDI file:', error);
    //   });

    return () => {
      // Cleanup function to clean up resources when the component unmounts
      if (playerRef.current) {
        playerRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const handlePlay = async () => {
    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.stop();
        clearHighlightedNotes();
      } else {
        playerRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playKey = (note) => {
    if (notesRef.current[note]) {
      notesRef.current[note].style.background = 'blue';
    }
  };

  const stopKey = (note) => {
    if (notesRef.current[note]) {
      const isFlat = /b\d+/.test(note);
      notesRef.current[note].style.background = isFlat ? 'black' : 'white';
    }
  };

  const clearHighlightedNotes = () => {
    Object.keys(notesRef.current).forEach((note) => {
      const isFlat = /b\d+/.test(note);
      notesRef.current[note].style.background = isFlat ? 'black' : 'white';
    })
  }

  return (
    <MainContainer>
      <Card>
        <CardBody>
          <Button onClick={handlePlay}>
            {isPlaying ? 'Stop' : 'Play'}
          </Button>
            <div className="piano relative w-full h-40">
              <div className="keys flex relative">
                {Object.entries({
                  C3: 'C', 'Db3': 'Db', D3: 'D', 'Eb3': 'Eb', E3: 'E', F3: 'F',
                  'Gb3': 'Gb', G3: 'G', 'Ab3': 'Ab', A3: 'A', 'Bb3': 'Bb', B3: 'B',
                  C4: 'C', 'Db4': 'Db', D4: 'D', 'Eb4': 'Eb', E4: 'E', F4: 'F',
                  'Gb4': 'Gb', G4: 'G', 'Ab4': 'Ab', A4: 'A', 'Bb4': 'Bb', B4: 'B',
                  C5: 'C', 'Db5': 'Db', D5: 'D', 'Eb5': 'Eb', E5: 'E', F5: 'F',
                  'Gb5': 'Gb', G5: 'G', 'Ab5': 'Ab', A5: 'A', 'Bb5': 'Bb', B5: 'B'
                }).map(([key, note]) => (
                  <div 
                    ref={(el) => notesRef.current[key] = el}
                    className={`key relative flex items-center justify-center text-black font-bold ${
                      key.includes('b') 
                        ? 'bg-black text-white absolute z-10 w-6 h-20 ml-[-12px]'
                        : 'bg-white h-40 w-10 border border-gray-700'
                    }`}
                    key={key}
                  >
                    {note}
                  </div>
                ))}
              </div>
            </div>
        </CardBody>
      </Card>
    </MainContainer>
  );
}

export default Player;
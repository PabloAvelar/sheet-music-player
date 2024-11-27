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
  }

  const stopKey = (note) => {
    if (notesRef.current[note]) {
      notesRef.current[note].style.background = 'white';
    }
  }

  return (
    <MainContainer>
      <Card>
        <CardBody>
          <Button onClick={handlePlay}>
            {isPlaying ? 'Stop' : 'Play'}
          </Button>
          <div className="piano">
            <div className="keys">
              <div ref={(el) => notesRef.current['C4'] = el} className="key">C</div>
              <div ref={(el) => notesRef.current['C#4'] = el} className="key">C#</div>
              <div ref={(el) => notesRef.current['D4'] = el} className="key">D</div>
              <div ref={(el) => notesRef.current['D#4'] = el} className="key">D#</div>
              <div ref={(el) => notesRef.current['E4'] = el} className="key">E</div>
              <div ref={(el) => notesRef.current['F4'] = el} className="key">F</div>
              <div ref={(el) => notesRef.current['F#4'] = el} className="key">F#</div>
              <div ref={(el) => notesRef.current['G4'] = el} className="key">G</div>
              <div ref={(el) => notesRef.current['G#4'] = el} className="key">G#</div>
              <div ref={(el) => notesRef.current['A4'] = el} className="key">A</div>
              <div ref={(el) => notesRef.current['A#4'] = el} className="key">A#</div>
              <div ref={(el) => notesRef.current['B4'] = el} className="key">B</div>
            </div>
          </div>

        </CardBody>
      </Card>
    </MainContainer>
  );
}

export default Player;
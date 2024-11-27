"use client";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import { useEffect, useState, useRef } from 'react';
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import midiService from "../../services/midiService";


function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [midiFile, setMidiFile] = useState(null);
  const playerRef = useRef(null);
  const audioContextRef = useRef(null);
  const instrumentRef = useRef(null);
  const searchParams = useSearchParams();
  const notesRef = useRef({});

  // const getMidiFile = async () => {
  //   // Cargando archivo midi por parametros query
  //   const uuidMidiFile = searchParams.get('midifile');
  //   console.log(uuidMidiFile);

  //   try {
  //     const res = await midiService.getMidiFile({ uuidMidiFile });
  //     return res;
  //   } catch (e) {
  //     console.error("Error al recuperar archivo midi", e);
  //     throw e;
  //   }
  // }

  useEffect(() => {
    
    // Recuperando archivo midi para usarlo en el player
    //const bin_midifile = getMidiFile();
    //console.log(bin_midifile);
    //setMidiFile(bin_midifile);
    





    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    Soundfont.instrument(audioContextRef.current, 'acoustic_grand_piano').then((instrument) => {
      instrumentRef.current = instrument;
      console.log('Instrument loaded');
    });

    playerRef.current = new MidiPlayer.Player((event) => {
      if (event.name === 'Note on' && instrumentRef.current) {
        console.log(`Playing note: ${event.noteName}`);
        instrumentRef.current.play(event.noteName, audioContextRef.current.currentTime,
          { gain: event.velocity / 100 });
        playKey(event.noteName);
      } else {
        console.error("Invalid noteName:", event);
      }

      if (event.name === 'Note off' && instrumentRef.current) { // Esta condicion no se cumple
        if (event.noteName) {
          console.log(`Stopping note: ${event.noteName}`);
          instrumentRef.current.stop(event.noteName);
          stopKey(event.noteName);
        } else {
          console.error("Invalid noteName: ", event);
        }
      }
    });

    // Load a MIDI file
    try {
      //playerRef.current.loadArrayBuffer(midifile.current);
      console.log('MIDI file loaded');
      fetch('/twinkle.MID')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.arrayBuffer();
        })
        .then(data => {
          playerRef.current.loadArrayBuffer(data);
          console.log('MIDI file loaded');
        })
        .catch(error => {
          console.error('Error loading MIDI file:', error);
        });
    } catch (error) {
      console.error("Ha ocurrido un error al cargar el midi al player", error);
    }
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
      notesRef.current[note].style.background = 'blue';
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
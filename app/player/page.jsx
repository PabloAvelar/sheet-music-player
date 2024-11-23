"use client";
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import {useEffect, useState, useRef} from 'react';
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';
import MidiPlayer from 'midi-player-js';
import Soundfont from 'soundfont-player';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const audioContextRef = useRef(null);
  const instrumentRef = useRef(null);

  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    Soundfont.instrument(audioContextRef.current, 'acoustic_grand_piano').then((instrument) => {
      instrumentRef.current = instrument;
      console.log('Instrument loaded');
    });

    playerRef.current = new MidiPlayer.Player((event) => {
      if (event.name === 'Note on' && instrumentRef.current) {
        console.log(`Playing note: ${event.noteName}`);
        instrumentRef.current.play(event.noteName, audioContextRef.current.currentTime, { gain: event.velocity / 100 });
      }
    });

    // Load a MIDI file
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

  return (
    <MainContainer>
      <Navbar />
      <Card>
        <CardBody>
          <Button onClick={handlePlay}>
            {isPlaying ? 'Stop' : 'Play'}
          </Button>
        </CardBody>
      </Card>
    </MainContainer>
  );
}

export default Player;
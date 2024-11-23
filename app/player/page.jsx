"use client";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Navbar from '../../components/navbar';
import MainContainer from '../../components/maincontainer';
import MidiPlayer from 'midi-player-js';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    playerRef.current = new MidiPlayer.Player((event) => {
      console.log(event);
    });
  }, []);

  const handlePlay = () => {
    if (playerRef.current) {
      playerRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (playerRef.current) {
      playerRef.current.stop();
      setIsPlaying(false);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        playerRef.current.loadArrayBuffer(arrayBuffer);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  return (
    <main className="h-screen w-full bg-nord-6 ">
      <Navbar />

      <MainContainer>
        <input type="file" accept=".mid" onChange={handleFileChange} />
        <Button onClick={handlePlay} disabled={isPlaying}>Play</Button>
        <Button onClick={handleStop} disabled={!isPlaying}>Stop</Button>
      </MainContainer>
    </main>
  );
}

export default Player;
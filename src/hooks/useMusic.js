import { useRef } from "react";

const useMusic = (src, loop = true) => {
  const audioRef = useRef(null);

  const playMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = loop;
    }
    audioRef.current.play();
  };

  const stopMusic = () => {
    if (audioRef.current) {
      audioRef.current.pause();      
      audioRef.current.currentTime = 0;  
      audioRef.current = null;       
    }
  };

  return { playMusic, stopMusic };
};

export default useMusic;
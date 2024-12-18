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

  return { playMusic };
};

export default useMusic;
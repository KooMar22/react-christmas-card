const useMusic = (src, loop = true) => {
  const playMusic = () => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.play();
  };

  return { playMusic };
};

export default useMusic;
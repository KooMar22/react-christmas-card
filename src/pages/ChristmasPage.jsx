import { useEffect } from "react";
import "../christmaspage.css";
import Snowflakes from "../components/Snowflakes";
import Repatica from "../components/Repatica";
import Santa from "../components/Santa";
import Grinch from "../components/Grinch";
import Krampus from "../components/Krampus";

const ChristmasPage = () => {
  useEffect(() => {
    const audio = new Audio("/assets/music/Sleigh Ride.mp3");
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [])
  
  return (
    <div className="christmas-page">
      <Snowflakes />
      <Repatica />
      <Santa />
      <Grinch />
      <Krampus />
    </div>
  );
};

export default ChristmasPage;
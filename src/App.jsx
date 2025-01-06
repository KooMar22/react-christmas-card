import { useState, useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import ChristmasPage from "./pages/ChristmasPage";
import useMusic from "./hooks/useMusic";
import Footer from "./components/Footer";

const App = () => {
  const [isChristmasPage, setIsChristmasPage] = useState(false);
  const { playMusic, stopMusic } = useMusic("/assets/music/Sleigh Ride.mp3");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsChristmasPage(false);
        stopMusic();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [stopMusic]);

  const handleButtonClick = () => {
    setIsChristmasPage(true);
    playMusic();
  };

  return (
    <div className="app">
      {isChristmasPage ? (
        <ChristmasPage />
      ) : (
        <LandingPage onButtonClick={handleButtonClick} />
      )}
      <Footer />
    </div>
  );
};

export default App;
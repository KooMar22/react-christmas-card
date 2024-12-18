import { useState, useRef } from "react";
import LandingPage from "./pages/LandingPage";
import ChristmasPage from "./pages/ChristmasPage";
import Footer from "./components/Footer"

const App = () => {
  const [isChristmasPage, setIsChristmasPage] = useState(false);
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    setIsChristmasPage(true);

    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="app">
      <audio ref={audioRef} src="/assets/music/Sleigh Ride.mp3" loop />
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
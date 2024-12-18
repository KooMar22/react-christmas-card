import { useState} from "react";
import LandingPage from "./pages/LandingPage";
import ChristmasPage from "./pages/ChristmasPage";
import Footer from "./components/Footer"
import useMusic from "./hooks/useMusic";

const App = () => {
  const [isChristmasPage, setIsChristmasPage] = useState(false);
  const { playMusic } = useMusic("/assets/music/Sleigh Ride.mp3");

  const handleButtonClick = () => {
    setIsChristmasPage(true);
    playMusic()
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
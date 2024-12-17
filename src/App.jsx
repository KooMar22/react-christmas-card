import { useState } from "react";
import LandingPage from "./pages/LandingPage";
import ChristmasPage from "./pages/ChristmasPage";
import Footer from "./components/Footer"

const App = () => {
  const [isChristmasPage, setIsChristmasPage] = useState(false);

  const handleButtonClick = () => {
    setIsChristmasPage(true);
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
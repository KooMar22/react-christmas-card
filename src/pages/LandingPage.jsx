import "../landingpage.css";

const LandingPage = ({ onButtonClick }) => {
  return (
    <div className="landing-page">
      <div className="present">
        <img src="/assets/images/present.jpg" alt="Present Image" />
      </div>

      <button
        className="start-button"
        onClick={onButtonClick}
        >Stisni me
      </button>
    </div>
  );
};

export default LandingPage;
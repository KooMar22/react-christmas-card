import Snowfall from "react-snowfall";

const Snowflakes = () => {
  return (
    <div className="snowfall-container">
      <Snowfall
        className="snowflakes"
        snowflakeCount={500}
        color="white"
      />
    </div>
  );
};

export default Snowflakes;
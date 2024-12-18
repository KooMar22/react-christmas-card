import "../christmaspage.css";
import Snowflakes from "../components/Snowflakes";
import Repatica from "../components/Repatica";
import Santa from "../components/Santa";
import Grinch from "../components/Grinch";
import Krampus from "../components/Krampus";

const ChristmasPage = () => {
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
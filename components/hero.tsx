import Brew from "./brew";
import Timer from "./timer";

export default function Hero() {
  return (
    <div className="hero min-h-[50vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <Brew />
      </div>
    </div>
  );
}

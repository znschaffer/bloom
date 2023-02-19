import { createContext } from "vm";
import Recipe from "./recipe";
import Steps from "./steps";
import Timer from "./timer";

export default function Brew() {
  const BrewContext = createContext();
  return (
    <div className="flex">
      <div className="m-3">
        <Timer />
      </div>
      <div className="m-3">
        <Recipe />
        <Steps />
      </div>
    </div>
  );
}

import { Timer_data } from "@/context/context";
import { useContext } from "react";

export default function Steps({ recipe }: { recipe: Recipe }) {
  if (!recipe) {
    return <></>;
  }
  function timeToMinutesSeconds(time: number) {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds;
  }

  const { timer, setTimer } = useContext(Timer_data);

  return (
    <div className="flex flex-col gap-4 ">
      <div className=" flex flex-col gap-2 items-center">
        <div className="flex flex-row gap-2">
          <span className="badge ">{recipe.method}</span>
          <span className="badge badge-info">{recipe.ratio.water}g</span>
          <span className="badge badge-accent">{recipe.ratio.beans}g</span>
        </div>
      </div>
      <div className="divider">Steps</div>
      <ul className="steps pl-6 steps-vertical lg:steps-horizontal">
        {recipe.steps.map((step, i) => (
          <li
            key={i}
            data-content={timeToMinutesSeconds(step.time)}
            className={` step ${timer.time > step.time ? "step-neutral" : ""}`}
          >
            {step.action}
          </li>
        ))}
      </ul>
    </div>
  );
}

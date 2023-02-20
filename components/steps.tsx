import { Timer_data } from "@/context/context";
import { useContext } from "react";

export default function Steps({ recipe }) {
  if (!recipe) {
    return <></>;
  }
  function timeToMinutesSeconds(time: Number) {
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
    <>
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
    </>
  );
}

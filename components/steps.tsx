import { Timer_data } from "@/context/context";
import { useContext } from "react";

export default function Steps() {
  let steps = [
    { time: 0, action: "Pour 30g and bloom" },
    { time: 45, action: "Pour 270g" },
    { time: 75, action: "Pour 200g" },
    { time: 120, action: "Swirl V60 gently" },
    { time: 180, action: "Done!" },
  ];

  const { timer, setTimer } = useContext(Timer_data);

  return (
    <>
      <ul className="steps steps-vertical">
        {steps.map((step, i) => (
          <li
            key={i}
            data-content={step.time}
            className={`step ${timer.time > step.time ? "step-primary" : ""}`}
          >
            {step.action}
          </li>
        ))}
      </ul>
    </>
  );
}

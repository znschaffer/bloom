import { Timer_data } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import Log from "./log";

export default function Timer() {
  const { timer, setTimer } = useContext(Timer_data);

  function toggle() {
    setTimer({ ...timer, brewing: !timer.brewing });
  }

  function reset() {
    setTimer({ brewing: false, time: 0 });
  }

  useEffect(() => {
    let interval: undefined | NodeJS.Timer = undefined;
    if (timer.brewing) {
      interval = setInterval(() => {
        setTimer({ ...timer, time: timer.time + 1 });
      }, 1000);
    } else if (!timer.brewing && timer.time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <>
      <div className="card flex-shrink-0 max-w-sm bg-base-100 ">
        <div className="card-body">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": timer.time }}></span>
          </span>
          <div className="card-actions justify-end">
            <div className="btn-group">
              {!timer.brewing && timer.time !== 0 ? (
                <>
                  <Log time={timer.time} />
                  <button onClick={reset} className="btn btn-sm">
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button onClick={toggle} className="btn btn-sm">
                    {timer.brewing ? "End" : "Brew"}
                  </button>
                  <button onClick={reset} className="btn btn-sm">
                    Reset
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

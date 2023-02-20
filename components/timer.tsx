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

  function timeAsSeconds(time: number) {
    var seconds = time % 60;
    return seconds;
  }

  function timeAsMinutes(time: number) {
    var minutes = Math.floor(time / 60);
    return minutes;
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
      <div className="card no-animation w-64  bg-base-100 ">
        <div className="card-body">
          <span className="countdown self-center text-4xl">
            <span
              style={{
                "--value": timeAsMinutes(timer.time),
              }}
            ></span>
            :
            <span
              style={{
                "--value": timeAsSeconds(timer.time),
              }}
            ></span>
          </span>
          <div className="card-actions m-auto">
            <div className="btn-group-horizontal btn-group">
              {!timer.brewing && timer.time !== 0 ? (
                <>
                  <Log time={timer.time} />
                  <button onClick={reset} className="btn btn-ghost btn-sm">
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button onClick={toggle} className="btn btn-ghost btn-sm">
                    {timer.brewing ? "Stop" : "Brew"}
                  </button>
                  <button onClick={reset} className="btn btn-ghost btn-sm">
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

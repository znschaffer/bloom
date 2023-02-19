import { useEffect, useState } from "react";
import Log from "./log";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [isBrewing, setIsBrewing] = useState(false);

  function toggle() {
    setIsBrewing(!isBrewing);
  }

  function reset() {
    setTime(0);
    setIsBrewing(false);
  }

  useEffect(() => {
    let interval: undefined | NodeJS.Timer = undefined;
    if (isBrewing) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!isBrewing && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isBrewing, time]);

  return (
    <>
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <span className="countdown font-mono text-4xl">
            <span style={{ "--value": time }}></span>
          </span>
          <div className="card-actions justify-end">
            <div className="btn-group">
              {!isBrewing && time !== 0 ? (
                <>
                  <Log time={time} />
                  <button onClick={reset} className="btn btn-sm">
                    Reset
                  </button>
                </>
              ) : (
                <>
                  <button onClick={toggle} className="btn btn-sm">
                    {isBrewing ? "End" : "Brew"}
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

import { useEffect, useState } from "react";

function LogCard(log: Log) {
  return (
    <>
      <p>{log.brewTime}</p>
    </>
  );
}

export default function History() {
  const initialState: Log[] = [];
  const [log, setLog] = useState(initialState);

  useEffect(() => {
    const logData = JSON.parse(localStorage.getItem("log"));
    if (logData) {
      setLog(logData);
    }
  }, []);

  useEffect(() => {
    if (log !== initialState) {
      localStorage.setItem("log", JSON.stringify(log));
    }
  }, [log]);

  console.log(log);

  return <>{log.map((log) => LogCard(log))}</>;
}

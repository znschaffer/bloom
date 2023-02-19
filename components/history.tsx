import { useEffect, useState } from "react";

function LogCard(log: Log) {
  console.log(log);
  return (
    <tr>
      <th>1</th>
      <td>{log.brewTime}</td>
      <td>{log.brewRatio.water}</td>
      <td>{log.brewRatio.beans}</td>
      <td>{log.bean.name}</td>
      <td>{log.rating}</td>
    </tr>
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

  return (
    <div className="max-w-lg m-auto">
      <h1>Brewing Log</h1>
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Brew Time</th>
            <th>Water In</th>
            <th>Coffee Out</th>
            <th>Bean</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{log.map((log) => LogCard(log))}</tbody>
      </table>
    </div>
  );
}

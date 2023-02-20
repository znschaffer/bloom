import { useEffect, useState } from "react";

function LogCard(log: Log, index: number) {
  return (
    <tr key={index} className="table-row">
      <td>{log.brewTime}</td>
      <td>{log.brewRatio.water}</td>
      <td>{log.brewRatio.beans}</td>
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

  return (
    <div className="m-auto">
      <table className="table table-auto table-zebra table-hover">
        <caption>Saved Brews</caption>
        <thead>
          <tr>
            <th>Brew Time</th>
            <th>Water</th>
            <th>Beans</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>{log.map((log, i) => LogCard(log, i))}</tbody>
      </table>
    </div>
  );
}

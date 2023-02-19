import { createContext, useState } from "react";

export const Timer_data = createContext(null);

export default function Context({ children }) {
  const [timer, setTimer] = useState({ brewing: false, time: 0 });

  return (
    <Timer_data.Provider value={{ timer, setTimer }}>
      {children}
    </Timer_data.Provider>
  );
}

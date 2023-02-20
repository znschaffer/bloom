import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export type TimerContent = {
  timer: {
    brewing: boolean;
    time: number;
  };
  setTimer: Dispatch<
    SetStateAction<{
      brewing: boolean;
      time: number;
    }>
  >;
} | null;

export const Timer_data = createContext<TimerContent>(null);

type ContextProps = {
  children: ReactNode;
};

export default function Context({ children }: ContextProps) {
  const [timer, setTimer] = useState({ brewing: false, time: 0 });
  return (
    <>
      <Timer_data.Provider value={{ timer, setTimer }}>
        {children}
      </Timer_data.Provider>
    </>
  );
}

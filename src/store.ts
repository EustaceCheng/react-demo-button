import { createContext } from "react";
type Context = {
  selected: number[];
  setselected: React.Dispatch<React.SetStateAction<number[]>>;
};

export const selectedSet = new Set<number>();
export const SumContext = createContext<Context | null>(null);

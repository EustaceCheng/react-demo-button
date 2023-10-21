import { createContext } from "react";

export const selectedSet = new Set<number>();

export const SumContext = createContext<Set<number>>(selectedSet);

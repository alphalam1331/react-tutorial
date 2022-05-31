import { createContext } from "react";

export const toDoContext = createContext<{
  itemList: Array<{ id: number; task: string }>;
  setItemList: React.Dispatch<
    React.SetStateAction<Array<{ id: number; task: string }>>
  >;
} | null>(null);

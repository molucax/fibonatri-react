import React, { createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import { nodesON2 } from "../data/nodes";
import functions from "../data/functions";
import { INode, IState } from "../interfaces/interfaces";
import { purple, yellow, blue, grey } from "../helpers/palette";
import { TAction } from "../context/reducer";

interface IProviderProps {
  children: JSX.Element | JSX.Element[];
  // también lo puedo tipar como "React.ReactNode"
}

interface IContext {
  state: IState;
  dispatch: React.Dispatch<TAction>;
  getNodeColor: (hash: string) => string | undefined;
  line: number;
  setLine: React.Dispatch<React.SetStateAction<number>>;
  done: boolean;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: IState = {
  nodes: nodesON2,
  currentNode: nodesON2[0],
  currentFunction: functions[0],
  memo: {},
};

export const AppContext = createContext<IContext>({} as IContext);

export default function AppProvider({ children }: IProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [done, setDone] = useState(false);
  const [line, setLine] = useState(1);

  function getNodeColor(hash: string) {
    let node = state.nodes.find((x: INode) => x.hash === hash);
    let currentNode = state.currentNode;
    if (node && currentNode) {
      if (currentNode.hash === node.hash) return purple;
      else if (currentNode.solved?.includes(node.hash)) return blue;
      else if (node.hash < currentNode.hash) return yellow;
    }
    return grey;
  }

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,

        getNodeColor,

        line,
        setLine,
        done,
        setDone,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

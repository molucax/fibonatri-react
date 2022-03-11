import React, { createContext, useReducer, useState } from "react";
import reducer from "./reducer";
import nodes from "../data/nodes";
import functions from "../data/functions";
import { IState } from "../interfaces/interfaces"
import { TAction } from "../context/reducer";

interface IProviderProps {
    children: JSX.Element | JSX.Element[]; 
    // también lo puedo tipar como "React.ReactNode"
}

interface IContext {
    state: IState,
    dispatch: React.Dispatch<TAction>,
    getNodeColor: (hash: string) => string | undefined;
    line: number;
    setLine: React.Dispatch<React.SetStateAction<number>>;
    done: boolean;
    setDone: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialState: IState = {
    nodes: nodes,
    currentNode: nodes[0],
    currentFunction: functions[0],
}

export const AppContext = createContext<IContext>({} as IContext);

export default function AppProvider ({ children }: IProviderProps) {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [done, setDone] = useState(false)
    const [line, setLine] = useState(1)

    function getNodeColor(hash: string) {
        let node = state.nodes.find(x => x.hash === hash)
        let currentNode = state.currentNode
        if(node && currentNode) {
            if (currentNode.hash === node.hash) return "#7b3c59" // violeta
            else if (currentNode.solved?.includes(node.hash)) return "#248888" // azul
            else if (node.hash < currentNode.hash) return "#ece58a" // amarillo 
            else return "#444444" // gris
        }
    }

    return (
        <AppContext.Provider value={{
            state, 
            dispatch,

            getNodeColor,

            line,setLine,
            done, setDone
        }}>
            { children }
        </AppContext.Provider>
    )
}
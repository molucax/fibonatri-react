import { IState, INode } from "../interfaces/interfaces";
import fib from "../helpers/fib";
import functions from "../data/functions";

export enum Actions {
    SET_NODE_RESULT = "SET_NODE_RESULT",
    SET_CURRENT_NODE = "SET_CURRENT_NODE",
    SET_NEXT_NODE = "SET_NEXT_NODE",
    SET_CURRENT_FUNCTION = "SET_CURRENT_FUNCTION"
}

export type TAction = { 
    type: Actions, 
    payload: any;
}

export default function reducer(state: IState, action: TAction ): IState {
    switch (action.type) {
        case Actions.SET_NODE_RESULT:
            return {
                ...state,
                nodes: setNodeResult(action.payload, state.nodes)
            };
        case Actions.SET_CURRENT_NODE:
            return {
                ...state,
                currentNode: getNodeByHash(action.payload, state.nodes)
            };
        case Actions.SET_NEXT_NODE:
            return {
                ...state,
                currentNode: getNextNode(state?.currentNode?.hash, state.nodes)
            }
        case Actions.SET_CURRENT_FUNCTION:
            return {
                ...state,
                currentFunction: setCurrentFunction(action.payload)
            };
        default:
            return state;
    }
}


// ----- helpers ---- //

function getNodeByHash(hash: string, array: INode[]) {
    return array.find(x => x.hash === hash)
}

function getNextNode(currHash: string | undefined, array: INode[]) {
    if(currHash && currHash !== array[array.length-1].hash) {
        let arrHash = array.map(x => x.hash)
        return array[arrHash.indexOf(currHash) + 1]
    }
    return array.find(x => x.hash === currHash)
}

function setNodeResult(hash: string, array: INode[]) {
    let arr = [...array]
    let node = getNodeByHash(hash, arr)
    if(node) node.result = fib(node.value)
    return arr;
}

function setCurrentFunction(complexity: string) {
    if(complexity === "on2") return functions[0]
    if(complexity === "on") return functions[1]
}
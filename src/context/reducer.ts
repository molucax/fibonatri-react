import { IState, INode } from "../interfaces/interfaces";
import functions from "../data/functions";
import { nodesON, nodesON2 } from "../data/nodes";

export enum Actions {
  SET_NODES = "SET_NODES",
  SET_CURRENT_NODE = "SET_CURRENT_NODE",
  SET_NEXT_NODE = "SET_NEXT_NODE",
  SET_CURRENT_FUNCTION = "SET_CURRENT_FUNCTION",
  SET_MEMO = "SET_MEMO",
}

export type TAction = {
  type: Actions;
  payload: any;
};

export default function reducer(state: IState, action: TAction): IState {
  switch (action.type) {
    case Actions.SET_NODES:
      return {
        ...state,
        nodes: setNodes(action.payload),
      };
    case Actions.SET_CURRENT_NODE:
      return {
        ...state,
        currentNode: getNodeByHash(action.payload, state.nodes),
      };
    case Actions.SET_NEXT_NODE:
      return {
        ...state,
        currentNode: getNextNode(state?.currentNode?.hash, state.nodes),
      };
    case Actions.SET_CURRENT_FUNCTION:
      return {
        ...state,
        currentFunction: setCurrentFunction(action.payload),
      };
    default:
      return state;
  }
}

// ----- helpers ---- //

export function getNodeByHash(hash: string, array: INode[] = nodesON) {
  return array.find((x) => x.hash === hash);
}
export function getNextNode(currHash: string | undefined, array: INode[]) {
  if (currHash && currHash !== array[array.length - 1].hash) {
    let arrHash = array.map((x) => x.hash);
    return array[arrHash.indexOf(currHash) + 1];
  }
  return array.find((x) => x.hash === currHash);
}
function setCurrentFunction(complexity: string) {
  if (complexity === "on2") return functions[0];
  if (complexity === "on") return functions[1];
}
function setNodes(complexity: string) {
  if (complexity === "on2") return nodesON2;
  if (complexity === "on") return nodesON;
}

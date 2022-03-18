import { INode } from "../interfaces/interfaces";
import { blue, grey, yellow } from "./palette";

export function getBorderBottomStyle( complexity: string, value: number, hash: string, currentNode: INode ) {
  if(value <= 2) return "none";
  if(complexity === "on2") {
    if(currentNode.solved?.includes(hash)) return `dotted 5px ${blue}`
    if(currentNode.hash > hash || currentNode.hash === hash) return `dotted 5px ${yellow}`
  }
  else if(complexity === "on") {
    if(
      currentNode.solved?.includes(hash) 
      && hash <= "1A2A3A4A" 
      && currentNode.hash > hash
    ) return `dotted 5px ${blue}`
    if(
      currentNode.hash >= hash 
      && (hash <= "1A2A3A4A" /* && currentNode.hash > hash */)
    ) return `dotted 5px ${yellow}`
  }
  return `dotted 5px ${grey}`
}
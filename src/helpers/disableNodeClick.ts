import { nodesON } from "../data/nodes";

export function disableNodeClick(complexity: string, hash: string) {
  if(complexity === "on2") return false;
  if(complexity === "on") {
    let result = (nodesON.map(x => x.hash).includes(hash))
    return !result
  }
  return false;
}
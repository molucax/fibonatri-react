export interface INode {
    hash: string; // identificador del nodo
    value: number; // n
    result: null | number; // el resultado de fib(value)
    solved: null | string[]; // array con los hash de todos los nodos que tendrán un result cuando este nodo sea el currentNode 
}

export interface IFunction {
    complexity: string; // string de la invocación
    code: {}; // codigo de la función
}

export interface IState {
    nodes: INode[]; // lista de nodos
    currentNode: undefined | INode; // el nodo actual
    currentFunction: undefined | IFunction; // complejidad del algoritmo actual
}
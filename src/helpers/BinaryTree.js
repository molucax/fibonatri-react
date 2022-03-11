import fib from "./fib";

export default function FibonacciTree(value, hash = null) {
   this.hash = hash;
   this.value = value;
   this.parent = null;
   this.left = null;
   this.right = null;
   this.level = null;
}

function generateHash(level, side,) {
   if (level === 0) return (level + 1).toString() + side;
   return id + (level + 1).toString() + side;
 }

// Crea el arbol desde una posición n.
FibonacciTree.prototype.create = function(n) {
  /*  while() { */
      if(n > 2) {
         let leftNode = new FibonacciTree(n-1);
         let rightNode = new FibonacciTree(n-2);
         leftNode.parent = this
         rightNode.parent = this
         leftNode.value = n-1
         rightNode.value = n-2
         leftNode.hash = this.hash === "0" ? "1A" : generateHash(this.hash, "A")
         rightNode.hash = this.hash === "0" ? "1A" : generateHash(this.hash, "B")
         this.left = leftNode;
         this.right = rightNode;
      }
  /*  } */
}

// Le asigna un resultado al nodo si corresponde.
FibonacciTree.prototype.setResult = function(hash) {
   
}

// Retorna un array con todos los nodos del árbol, ordenados por orden de invocación.
FibonacciTree.prototype.getList = function() {

}
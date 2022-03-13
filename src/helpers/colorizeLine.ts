export function colorizeLine (nodeValue: number | undefined, complexity: string | undefined, lineObj: any, returnLine: number, currentLine: number) {

    // Es la linea que retorna?
    function isReturnLine() {
        return lineObj.turn === returnLine;
    }
    
    // Esta línea es la actual?
    function isLineTurn() {
        return lineObj.turn === currentLine;
    }

    // Estoy en un caso base?
    function isBaseCase() {
        return  nodeValue && nodeValue <= 2
    }

    // ------ CASOS ------ // 
    
    // 1: -Es la primera línea o la última. En ambas funciones esta línea se debe pintar.
    if(lineObj.turn === 1) return true;
    
    // 2: -La complejidad de la función es cuadrática.
    //    -La línea actual es la que retorna y además es el turno de esta línea.
    if(complexity === "on2") return isReturnLine() && isLineTurn();

    // 3: -La complejidad es lineal.
    if(complexity === "on") {
        // -Es caso base, es el turno de esta línea, y es la línea que retorna.
        if(isBaseCase() && isLineTurn() && isReturnLine()) return true;
        if(
            !isBaseCase() // -No es caso base,
            && (isLineTurn() || currentLine === returnLine) // es el turno de esta línea ó llegamos a la línea que retorna, 
            && (isReturnLine() || lineObj.turn === returnLine-1) // y es la línea de retorno o la línea anterior a la de retorno.
        ) return true; //
    } 
    return false;
}
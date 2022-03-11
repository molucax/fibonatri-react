import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Function from "./Function";

export default function FunctionContainer() {

    const { state } = useContext(AppContext);
    const { currentNode, currentFunction } = state;

    const returnLine: number = 
        currentFunction?.complexity === "on2" ? (
            currentNode?.value === 1 || currentNode?.value === 2 ? 
            2 : 3
        ) : (
            currentNode?.value === 1 || currentNode?.value === 2 ? 
            2 : 3
        )
    const linesQty: number = 
        currentFunction?.complexity === "on2" ? 4 : 6
    
    return (
        <Wrapper>
            <Function 
                returnLine={returnLine} 
                code={currentFunction?.code}
                linesQty={linesQty}
            /> 
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

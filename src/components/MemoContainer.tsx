import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Memo from "./Memo";


export default function MemoContainer() {
  
  const { state } = useContext(AppContext)

  return (
    <Wrapper>
        {
            state.currentNode && state.currentFunction?.complexity === "on" 
                ? <Memo memo={state.currentNode.memo} /> 
                : null
        }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  /* background: grey; */
  display: flex;
  flex-direction: row;
  justify-content: center;
`
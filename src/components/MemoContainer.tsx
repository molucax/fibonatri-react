import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import Memo from "./Memo";

export default function MemoContainer() {
  const { state } = useContext(AppContext);

  if (state.currentNode && state.currentFunction?.complexity === "on") {
    return (
      <Wrapper>
        <Memo memo={state.currentNode.memo} />
      </Wrapper>
    );
  } else return null;
}

const Wrapper = styled.div`
  width: 19%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1rem;
  margin-left: 1rem;
  border-radius: 1rem;
  background: #131212;
`;

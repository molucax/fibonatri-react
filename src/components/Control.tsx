import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Fade } from "react-reveal";
import fib from "../helpers/fib";

export default function Control() {
  const { state, done } = useContext(AppContext);

  return (
    <Wrapper>
      <InfoContainer>
        <N>{`Input: ${state?.currentNode?.value}`}</N>
        {done ? (
          <Fade>
            <Result
              color={
                state?.currentNode &&
                (state.currentNode.value <= 2 ||
                  (state.currentNode.memo &&
                    state.currentNode.value in state.currentNode.memo &&
                    state.currentNode.memo[state.currentNode.value] &&
                    state.currentNode.memo[state.currentNode.value][0] !== "f"))
                  ? "#248888"
                  : "#ece58a"
              }
            >
              {state.currentNode &&
                (state.currentNode.value <= 2
                  ? `Output: 1`
                  : state.currentNode.memo &&
                    state.currentNode.memo[state.currentNode.value] &&
                    state.currentNode.memo[state.currentNode.value][0] !== "f"
                  ? `Output: ${fib(state.currentNode.value)}`
                  : "Recursión")}
            </Result>
          </Fade>
        ) : null}
      </InfoContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 30%;
`;
const N = styled.span`
  font-weight: bold;
  color: #7b3c59;
`;
const Result = styled(N)`
  color: ${(props) => props.color};
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

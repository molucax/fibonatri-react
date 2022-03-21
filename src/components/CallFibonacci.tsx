import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Actions, getNextNode } from "../context/reducer";
import { Fade } from "react-reveal";

export default function CallFibonacci() {
  const { state, dispatch, done, setDone, setLine } = useContext(AppContext);

  function handleClick() {
    setDone(false);
    setLine(1);
    dispatch({ type: Actions.SET_NEXT_NODE, payload: state.currentNode?.hash });
  }
  return (
    <div>
      {done ? (
        <Fade>
          {
            state?.currentNode?.solved?.includes("0") 
              ? <Result>{"fibonacci(7) -> 13"}</Result>
              : (
                <ButtonContainer>
                  <CallButton onClick={handleClick}>
                    Invocar:
                    <br />
                    <strong>{`fibonacci(${
                      getNextNode(state?.currentNode?.hash, state.nodes)?.value
                    })`}</strong>
                  </CallButton>
                </ButtonContainer>
              )
          }
        </Fade>
      ) : null}
    </div>
  );
}

const ButtonContainer = styled.div``;
const CallButton = styled.button`
  cursor: pointer;
  color: lightgrey;
  background: #131212;
  border-style: none;
  padding: 1rem;
  font-size: 1.1rem;
  border-radius: 1rem;
  transition: 0.3s;
  &:hover {
    background: #7b3c59;
    font-size: 1.2rem;
    transition: 0.3s;
  }
`;
const Result = styled.span`
  font-size: 1.3rem;
  font-weight: bold;
  color: #248888;
`

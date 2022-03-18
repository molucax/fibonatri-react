import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Actions } from "../context/reducer";
import { disableNodeClick } from "../helpers/disableNodeClick";
import fib from "../helpers/fib";

interface IProps {
  value: number;
  hash: string;
}

interface ICircleProps {
  background: string | undefined;
  disableClick: string | undefined;
}

export default function Node({ value, hash }: IProps) {
  const { dispatch, state, getNodeColor, setLine, setDone, done } =
    useContext(AppContext);
  const [mouseOver, setMouseOver] = useState(false);

  const isBaseCase: boolean =
    state.currentNode?.value && state.currentNode.value <= 2 ? true : false;

  function handleClick() {
    setDone(false);
    setLine(1);
    dispatch({ type: Actions.SET_CURRENT_NODE, payload: hash });
  }
  function checkResult() {
    return state.currentNode?.solved?.includes(hash);
  }

  return (
    <Circle
      title={
        ((checkResult() || state.currentNode?.hash === hash) && isBaseCase) ||
        checkResult()
          ? `fibonacci(${value}) -> ${fib(value)}`
          : undefined
      }
      background={
        mouseOver &&
        (checkResult() ||
          (state.currentNode?.hash === hash && state.currentNode?.value <= 2))
          ? "white"
          : getNodeColor(hash)
      }
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
      disableClick={
        !done ||
        (state?.currentFunction &&
          disableNodeClick(state.currentFunction.complexity, hash))
          ? "none"
          : undefined
      }
      onClick={handleClick}
    >
      <InfoContainer>
        <Value>
          {mouseOver &&
          (checkResult() ||
            (state.currentNode?.hash === hash && state.currentNode?.value <= 2))
            ? fib(value)
            : value}
        </Value>
      </InfoContainer>
    </Circle>
  );
}

const Circle = styled.div<ICircleProps>`
  background: ${(props) => props.background};
  width: 35px;
  height: 35px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1;
  overflow: visible;
  pointer-events: ${(props) => props.disableClick};
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Value = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
  color: black;
`;

import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import Node from "./Node";
import { grey } from "../helpers/palette";
import { getBorderBottomStyle } from "../helpers/getBorderBottomStyle";

interface IProps {
  value: number;
  level: number;
  hash: string;
}

interface IParentProps {
  level: number;
  borderBottom: string | undefined;
}

export default function NodeContainer({ value, level, hash }: IProps) {
  let { state } = useContext(AppContext);

  let currentNode = state?.currentNode;
  let currentFunction = state?.currentFunction;

  function generateHashId(level: number, side: string, id: string) {
    if (level === 0) return (level + 1).toString() + side;
    return id + (level + 1).toString() + side;
  }

  return (
    <Container>
      <Parent
        level={level}
        borderBottom={
          currentNode && currentFunction
            ? getBorderBottomStyle(
                currentFunction.complexity,
                value,
                hash,
                currentNode
              )
            : `dotted 5px ${grey}`
        }
      >
        <Node value={value} hash={hash} />
      </Parent>
      {value > 2 ? (
        <Children>
          <NodeLeft
            value={value - 1}
            level={level + 1}
            hash={generateHashId(level, "A", hash)}
          />
          <NodeRight
            value={value - 2}
            level={level + 1}
            hash={generateHashId(level, "B", hash)}
          />
        </Children>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: black;
`;

const Parent = styled.div<IParentProps>`
  width: ${(props) => (props.level > 4 ? "100%" : "50%")};
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: ${(props) => props.borderBottom};
`;
const Children = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const NodeLeft = styled(NodeContainer)`
  width: auto;
`;
const NodeRight = styled(NodeContainer)`
  width: auto;
`;

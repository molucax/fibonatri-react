import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import styled from "styled-components";
import Node from "./Node";

interface IProps {
  value: number;
  level: number;
  hash: string;
}

interface IParentProps {
  value: number;
  level: number;
  hash: string;
  currentHash: string | undefined;
  color: string | undefined;
}

export default function NodeContainer({ value, level, hash }: IProps) {

  let { state, getNodeColor } = useContext(AppContext);

  function generateHashId(level: number, side: string, id: string) {
    if (level === 0) return (level + 1).toString() + side;
    return id + (level + 1).toString() + side;
  }

  return (
    <Container>
        <Parent
            value={value}
            level={level}
            hash={hash}
            currentHash={state?.currentNode?.hash} 
            color={getNodeColor(hash)}
           
        >
          <Node value={value} hash={hash} />
        </Parent>
        {
            value > 2 ? 
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
                </Children> : null
        }
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Parent = styled.div<IParentProps>`
    width: ${(props) => (props.level > 4 ? "100%" : "50%")};
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: ${(props) =>
        props.value <= 2
        ? "none"
        : props.color === "#248888"
        ? `dotted 5px ${props.color}`
        : (props.currentHash && props.currentHash < props.hash)
        ? `dotted 5px #444444`
        : `dotted 5px #ece58a`};
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
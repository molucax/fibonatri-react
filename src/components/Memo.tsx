import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { blue } from "../helpers/palette";

interface IMemoProps {
  memo: any;
}

export default function Memo({ memo }: IMemoProps) {
  const { state } = useContext(AppContext);
  const currHash = state?.currentNode?.hash;
  const currValue = state?.currentNode?.value;

  return (
    <Wrapper>
      <TitleContainer>
        <span>
          <strong>memo</strong>
        </span>
        <br />
      </TitleContainer>
      <ObjectContainer>
        <Curly>{"{"}</Curly>
        <br />
        {memo &&
          Object.keys(memo)
            .reverse()
            .map((key) => {
              return (
                <>
                  <KeyValue
                    key={key}
                    color={
                      (currHash === "1A2A3B" ||
                        currHash === "1A2B" ||
                        currHash === "1B") &&
                      key &&
                      Number(key) === currValue
                        ? blue
                        : undefined
                    }
                  >
                    {`${key}: 
                        ${key === "3" && currHash === "1A2A3A4A5A" ? "1 + fibonacci(1)" :
                          memo[key]
                            ? memo[key]
                            : `${
                                memo &&
                                memo[Number(key) - 1] &&
                                Number(key) - 1 in memo
                                  ? memo[Number(key) - 1]
                                  : `fibonacci(${Number(key) - 1})`
                              } + fibonacci(${Number(key) - 2})`
                        }`}
                  </KeyValue>
                  <br />
                </>
              );
            })}
        <Curly>{"}"}</Curly>
      </ObjectContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: lightgrey;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
`;
const ObjectContainer = styled.div``;

const Curly = styled.span`
  font-size: 1.1rem;
`;

const KeyValue = styled(Curly)`
  padding-left: 1rem;
  color: ${(props) => props.color};
  font-weight: ${(props) => (props.color ? "bold" : undefined)};
`;

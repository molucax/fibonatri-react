import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { grey } from "../helpers/palette";

interface IFunctionProps {
    returnLine: number;
    code: any;
    linesQty: number;
}

interface IDotProps {
    color: string;
}

export default function Function ({ returnLine, code }: IFunctionProps) {

  const { state, line, setLine, setDone } = useContext(AppContext);
  const currentNode = state?.currentNode;

  useEffect(() => {
    if(currentNode && (line < returnLine)) setTimeout(() => setLine(line+1), 500)
    else setDone(true)
  }, [line])

  function getDotColor(turn: number) {
    if(turn === returnLine) return "green"
    else return "red"
  }
  return (
    <Wrapper>
      <Container>
      <LinesContainer>
      {
          code && Object.keys(code).map((key) => {
              return (
                  <LineContainer>
                    <DotContainer
                        style={{ 
                            visibility: 
                            line === code[key].turn && code[key].turn !== 1 
                                ? undefined 
                                : "hidden"
                        }}
                    >
                    { 
                        <Dot color={getDotColor(code[key].turn)}>
                            ●
                        </Dot> 
                    }
                    </DotContainer>
                    <Line
                        style={
                            {
                                paddingLeft: `${(code[key].space * 3).toString()}vw`,
                                color: ((code[key].turn === returnLine && code[key].turn === line) || code[key].turn === 1)
                                            ? code[key].color 
                                            : grey
                            } 
                        }
                    >
                        {code[key].text}
                    </Line><br/>
                  </LineContainer>
              )
          })
      }
      </LinesContainer>
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`
const Container = styled.div`
    padding-left: 1.5rem;
    display: flex;
    flex-direction: row;
`
const DotContainer = styled.div`
    width: 1.5rem;
`
const Dot = styled.span<IDotProps>`
    font-size: 1.3rem;
    color: ${props => props.color};
`
const LinesContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const LineContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`
const Line = styled.span`
    font-size: 1.3rem;
`
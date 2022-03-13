import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Actions, getNextNode } from "../context/reducer";
import { Fade }from 'react-reveal';

export default function Control () {
    
    const { state, dispatch, done, setDone, setLine } = useContext(AppContext);

    function handleClick() {
        setDone(false)
        setLine(1)
        dispatch({ type: Actions.SET_NEXT_NODE, payload: state.currentNode?.hash })
    }

    return (
    <Wrapper>
        {   
            done ?
                <Fade>
                <InfoContainer>
                    <N>{`Input: ${state?.currentNode?.value}`}</N>
                    <Result>
                    {
                        state.currentNode ?
                        (   state.currentNode.value <= 2 
                            ? `Output: 1`
                            : "Recursión!"
                        ) : null
                    }
                    </Result>
                </InfoContainer>
                </Fade> : null
        }
        {
            done ?
                <Fade>
                <ButtonContainer>
                        <CallButton onClick={handleClick}>
                            Invocar:<br/> 
                            {`fibonacci(${getNextNode(state.currentNode?.hash, state.nodes)?.value})`}
                        </CallButton>
                </ButtonContainer>
                </Fade> : null
        }
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
/*     background: lightgreen; */
`
const N = styled.span`

`
const Result = styled(N)`

`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const ButtonContainer = styled.div`
    
`

const CallButton = styled.button`
    cursor: pointer;
`
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";

interface IMemoProps {
    memo: any;
}

export default function Memo({ memo }: IMemoProps) {

  return (
    <Wrapper>
        <TitleContainer>
            <span><strong>memo</strong></span><br/>
        </TitleContainer>
        <ObjectContainer>
            <Curly>{"{"}</Curly><br/>
            {
                memo && Object.keys(memo).reverse().map(key => {
                    return (
                        <>
                            <KeyValue key={key}>
                            { 
                                `${key}: ${memo[key] 
                                    ? memo[key] 
                                    : ("fibonacci("+(Number(key)-1)+")")+" + "+("fibonacci("+(Number(key)-2)+")")}` 
                            }
                            </KeyValue><br/>
                        </>        
                    ) 
                })
            }
            <Curly>{"}"}</Curly>
        </ObjectContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
   /*  background: red; */
`
const ObjectContainer = styled.div``

const Curly = styled.span`
    /* font-weight: bold; */
    font-size: 1.1rem;
`

const KeyValue = styled(Curly)`
    padding-left: 1rem;
`
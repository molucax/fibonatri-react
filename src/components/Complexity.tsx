import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Actions } from "../context/reducer";

/* type TOption = {
    name: string;
} */

export default function Complexity() {
  
  const { dispatch, setLine } = useContext(AppContext);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setLine(1)
    dispatch({
      type: Actions.SET_NODES,
      payload: e.target.value
    })
    dispatch({
      type: Actions.SET_CURRENT_NODE,
      payload: "0"
    })
    dispatch({ 
        type: Actions.SET_CURRENT_FUNCTION, 
        payload: e.target.value 
    })
  }

  return (
    <Wrapper>
      <Select onChange={handleSelect}>
        <Option value="on2">{"O(n²)"}</Option>
        <Option value="on">{"O(n)"}</Option>
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Select = styled.select``;
const Option = styled.option``;

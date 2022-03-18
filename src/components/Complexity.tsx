import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../context/AppContext";
import { Actions } from "../context/reducer";

export default function Complexity() {
  const { dispatch, setLine, setDone } = useContext(AppContext);

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    setLine(1);
    setDone(false);
    dispatch({
      type: Actions.SET_NODES,
      payload: e.target.value,
    });
    dispatch({
      type: Actions.SET_CURRENT_NODE,
      payload: "0",
    });
    dispatch({
      type: Actions.SET_CURRENT_FUNCTION,
      payload: e.target.value,
    });
  }

  return (
    <Wrapper>
      <Select onChange={handleSelect}>
        <option value="on2">{"O(2^n)"}</option>
        <option value="on">{"O(n)"}</option>
      </Select>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Select = styled.select`
  background: black;
  color: white;
  padding: 0.3rem;
  font-size: 1.1rem;
  border-style: none;
  border-radius: 0.4rem;
  option {
    border: none;
  }
`;

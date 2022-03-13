import styled from "styled-components";
import Complexity from "./components/Complexity";
import Control from "./components/Control";
import FunctionContainer from "./components/FunctionContainer";
import MemoContainer from "./components/MemoContainer";
import NodeContainer from "./components/NodeContainer";
import AppProvider from './context/AppContext';

export default function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Top>
          <NodeContainer value={7} level={0} hash={"0"} />
        </Top>
        <Bottom>
          <Left>
            <FunctionContainer />
            <ComplexityAndMemo>
              <Complexity />
              <MemoContainer />
            </ComplexityAndMemo>
          </Left>
          <Right>
            <Control />
          </Right>
        </Bottom>
      </Wrapper>
    </AppProvider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
`
const Top = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Bottom = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`
const Left = styled.div`
  width: 50%;
  height: 100%;
`
const Right = styled.div`
  width: 50%;
  height: 100%;
`
const ComplexityAndMemo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: 50%;
`
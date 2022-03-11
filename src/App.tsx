import styled from "styled-components";
import FunctionContainer from "./components/FunctionContainer";
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
          </Left>
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
  height: 50%;
`

const Left = styled.div`
  width: 50%;
  height: 100%;
`
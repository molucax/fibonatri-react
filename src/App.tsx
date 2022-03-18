import styled from "styled-components";
import CallFibonacci from "./components/CallFibonacci";
import Complexity from "./components/Complexity";
import Control from "./components/Control";
import FunctionContainer from "./components/FunctionContainer";
import MemoContainer from "./components/MemoContainer";
import NodeContainer from "./components/NodeContainer";
import AppProvider from "./context/AppContext";

export default function App() {
  return (
    <AppProvider>
      <Wrapper>
        <Top>
          <NodeContainer value={7} level={0} hash={"0"} />
        </Top>
        <Middle>
          <Grey>
            <ComplexityContainer>
              <Complexity />
            </ComplexityContainer>
            <FunctionContainer />
            <ControlContainer>
              <Control />
            </ControlContainer>
          </Grey>
          <MemoContainer />
        </Middle>
        <Bottom>
          <CallFibonacci />
        </Bottom>
      </Wrapper>
    </AppProvider>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Top = styled.div`
  width: 100%;
  height: 41%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Middle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Bottom = styled.div`
  width: 100%;
  height: 23%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grey = styled.div`
  padding: 1rem;
  width: 50%;
  background: #131212;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ComplexityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const ControlContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 1.5rem;
`;

import { Route, Routes } from 'react-router';
import styled from 'styled-components';

const AppDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e7e6;
`
const App = () => {
  //선언부
  return (
    <>
      <AppDiv>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/maker" element={<Maker />}/>
        </Routes>
      </AppDiv>
    </>
  );
}

export default App;

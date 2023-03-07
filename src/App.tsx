import React from 'react';
import ScoreSheet from "./components/ScoreSheet";
import styled from "styled-components";

const App = () => (
  <StyledApp>
    <StyledHeader>
      Bowling Game Kata
    </StyledHeader>
    <ScoreSheet/>
  </StyledApp>
)

const StyledApp = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
`

const StyledHeader = styled.header`
  font-size: calc(10px + 2vmin);
  color: white;
  margin-bottom: 1em;
`

export default App;
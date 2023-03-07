import React from "react";
import Frame from "./Frame";
import styled from "styled-components";

const PlayerRow = () => (<StyledPlayerRow>
    <Frame frameNumber={1}/>
    <Frame frameNumber={2}/>
    <Frame frameNumber={3}/>
    <Frame frameNumber={4}/>
    <Frame frameNumber={5}/>
    <Frame frameNumber={6}/>
    <Frame frameNumber={7}/>
    <Frame frameNumber={8}/>
    <Frame frameNumber={9}/>
    <Frame frameNumber={10}/>
  </StyledPlayerRow>
)

const StyledPlayerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr [col-start]) 1.25fr;
`

export default PlayerRow;
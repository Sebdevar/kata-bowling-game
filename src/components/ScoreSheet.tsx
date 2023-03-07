import React from "react";
import PlayerRow from "./PlayerRow";
import styled from "styled-components";

const ScoreSheet = () => (
  <StyledScoreSheet>
    <PlayerRow/>
  </StyledScoreSheet>
)

const StyledScoreSheet = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`

export default ScoreSheet;
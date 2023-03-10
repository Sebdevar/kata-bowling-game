import React from "react";
import PlayerRow from "./PlayerRow";
import styled from "styled-components";
import Controls from "./Controls";
import PlayerScoreProvider from "../providers/PlayerScore";

const ScoreSheet = () => {

  return (
    <StyledScoreSheet>
      <PlayerScoreProvider>
        <PlayerRow />
        <Controls />
      </PlayerScoreProvider>
    </StyledScoreSheet>
  )
}

const StyledScoreSheet = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-self: center;
`

export default ScoreSheet;
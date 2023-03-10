import React from "react";
import Frame from "./Frame";
import styled from "styled-components";
import {usePlayerScore} from "../providers/PlayerScore";

const PlayerRow = () => {
  const playerScore = usePlayerScore();

  return (
    <StyledPlayerRow>
      {
        playerScore.frames.map((frame, index) => {
          const showScore = (index < playerScore.currentFrame
              || playerScore.frames[playerScore.currentFrame].isLastFrame)
            && frame.bonusPointsTicker === 0;
          return (
            <Frame
              key={"frame" + index}
              frameNumber={index + 1}
              isLastFrame={frame.isLastFrame}
              firstRoll={frame.rolls[0]}
              secondRoll={frame.rolls[1]}
              thirdRoll={frame.rolls[2]}
              score={showScore ? frame.score : null}
            />
          );
        })
      }
    </StyledPlayerRow>
  )
}

const StyledPlayerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr [col-start]) 1.25fr;
`

export default PlayerRow;
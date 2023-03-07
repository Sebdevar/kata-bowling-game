import React from "react";
import Frame from "./Frame";
import styled from "styled-components";

type PlayerRowProps = {
  rolls: Array<Array<number | null>>
}

const PlayerRow = (props: PlayerRowProps) => (
  <StyledPlayerRow>
    {
      props.rolls.map((frame, index) => (
        <Frame
          key={"frame" + index}
          frameNumber={index + 1}
          firstRoll={frame[0]}
          secondRoll={frame[1]}
          thirdRoll={frame[2]}
        />
      ))
    }
  </StyledPlayerRow>
)

const StyledPlayerRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr [col-start]) 1.25fr;
`

export default PlayerRow;
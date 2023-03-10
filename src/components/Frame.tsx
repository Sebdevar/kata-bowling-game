import React from "react";
import styled from "styled-components";
import Roll from "./Roll";

type FrameProps = {
  frameNumber: number,
  isLastFrame: boolean,
  firstRoll?: number | null,
  secondRoll?: number | null,
  thirdRoll?: number | null,
  score?: number | null
};

const Frame = (props: FrameProps) => {
  const firstRollIsStrike = props.firstRoll === 10;

  const secondRollIsStrike = props.isLastFrame && firstRollIsStrike && props.secondRoll === 10;
  const secondRollIsSpare = !secondRollIsStrike && !firstRollIsStrike && props.firstRoll! + props.secondRoll! === 10;

  const thirdRollIsStrike = (secondRollIsStrike || secondRollIsSpare) && props.thirdRoll === 10;
  const thirdRollIsSpare = !thirdRollIsStrike && !secondRollIsStrike && !secondRollIsSpare &&
    props.secondRoll! + props.thirdRoll! === 10;

  return (
    <StyledFrame isLastFrame={props.isLastFrame}>
      {props.frameNumber}
      <Roll
        rollValue={props.firstRoll}
        displayStrike={firstRollIsStrike}
      />
      <Roll
        rollValue={props.secondRoll}
        displayStrike={secondRollIsStrike}
        displaySpare={secondRollIsSpare}
      />
      {
        props.isLastFrame &&
          <Roll
              rollValue={props.thirdRoll}
              displayStrike={thirdRollIsStrike}
              displaySpare={thirdRollIsSpare}
          />
      }
      <Score>
        {props.score}
      </Score>
    </StyledFrame>
  )
}

const StyledFrame = styled.div<{ isLastFrame: boolean }>`
  height: 5rem;
  background-color: white;
  border-style: solid;
  border-width: thin;

  display: grid;
  grid-template: ${props => {
    return !props.isLastFrame
            ? `". first-roll second-roll" 40% 
               "score score score" 60%
               / 1fr 1fr 1fr`
            : `". first-roll second-roll third-roll" 40%
               "score score score score" 60%
               / .66fr 1fr 1fr 1fr;`
  }}
`

const Score = styled.div`
  grid-column: span 3;
  width: 100%;
  margin: auto;
  font-size: 2rem;
`

export default Frame;
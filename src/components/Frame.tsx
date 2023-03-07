import React, {useState} from "react";
import styled from "styled-components";
import Roll from "./Roll";

type FrameProps = {
  frameNumber: number,
  firstRoll?: number,
  secondRoll?: number,
  thirdRoll?: number,
  score?: number
};

const Frame = (props: FrameProps) => {
  const [isLastFrame] = useState(props.frameNumber === 10);

  return (
    <StyledFrame isLastFrame={isLastFrame}>
      {props.frameNumber}
      <Roll
        rollValue={props.firstRoll}
        isFirstRoll={true}
      />
      <Roll rollValue={props.secondRoll} />
      {
        isLastFrame && <Roll rollValue={props.thirdRoll} />
      }
      <Score>
        {props.score}
      </Score>
    </StyledFrame>
  );
}

const StyledFrame = styled.div<{ isLastFrame: boolean }>`
  height: 5rem;
  background-color: white;
  border-style: solid;
  border-width: thin;

  display: grid;
  grid-template: ${ props => {
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
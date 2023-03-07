import React from "react";
import styled from "styled-components";

type RollProps = {
  rollValue?: number|null,
  displayStrike?: boolean,
  displaySpare?: boolean
};

const defaultProps = {
  displayStrike: false,
  displaySpare: false
}

const Roll = (props: RollProps) => {
  const getVisualOutput = () => {
    if (props.displayStrike) {
      return "X";
    }
    if (props.displaySpare) {
      return "/";
    }
    return props.rollValue
  }

  return (
    <StyledRoll>
      { getVisualOutput() }
    </StyledRoll>
  )
}

Roll.defaultProps = defaultProps;

const StyledRoll = styled.div`
  width: 100%;
  border-style: none solid solid;
  border-width: thin;
  font-size: 1.5rem;
`

export default Roll;
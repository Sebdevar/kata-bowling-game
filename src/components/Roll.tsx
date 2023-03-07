import React from "react";
import styled from "styled-components";

type RollProps = {
  rollValue?: number,
  isFirstRoll?: boolean
};

const defaultProps = {
  isFirstRoll: false
}

const Roll = (props: RollProps) => {
  return (
    <StyledRoll>
      {props.rollValue}
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
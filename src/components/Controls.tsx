import React, {memo, SyntheticEvent, useState} from "react";
import styled from "styled-components";
import {useAddRoll} from "../providers/PlayerScore";

const Controls = memo(() => {
  const [pinCount, setPinCount] = useState(0)
  const addRoll = useAddRoll();

  const handlePinCountChange = (event: SyntheticEvent) => {
    const element = event.target as HTMLInputElement;
    const value = element.valueAsNumber
    if (value < 0 || isNaN(value)) {
      setPinCount(0);
    } else if (value > 10) {
      setPinCount(10)
    } else {
      setPinCount(value);
    }
  }

  const handleSubmit = () => {
    addRoll(pinCount);
  }

  return (
    <StyledControls>
        <input
          type="number"
          onChange={handlePinCountChange}
          value={pinCount}
        />
        <button type="submit" onClick={handleSubmit}>
          Add Roll
        </button>
    </StyledControls>
  );
})

const StyledControls = styled.div``;

export default Controls
import React, {useCallback, useState} from "react";
import PlayerRow from "./PlayerRow";
import styled from "styled-components";
import Controls from "./Controls";

const getNullRollsArray = () => {
  const array = new Array<Array<number | null>>(10)
  for (let index = 0; index < 10; index++) {
      array[index] = [null, null];
  }
  array[9].push(null);
  return array;
}

const ScoreSheet = () => {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [currentRollIndex, setCurrentRollIndex] = useState(0);
  const [rolls, setRolls] = useState(getNullRollsArray());

  const handleAddRoll = useCallback((numberOfPins: number) => {
    setRolls(prevState => {
      const newRolls = [...prevState];
      newRolls[currentFrameIndex][currentRollIndex] = numberOfPins;
      return newRolls;
    });

    if ((currentRollIndex >= 1 || numberOfPins === 10) && currentFrameIndex < 9) {
      setCurrentFrameIndex(currentFrameIndex + 1);
      setCurrentRollIndex(0);
    } else {
      setCurrentRollIndex(currentRollIndex + 1);
    }
  }, [currentFrameIndex, currentRollIndex]);

  return (
    <StyledScoreSheet>
      <PlayerRow rolls={rolls}/>
      <Controls onAddRoll={handleAddRoll}/>
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
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
  const [currentPosition, setCurrentPosition] = useState({frame: 0, roll: 0})
  const [rolls, setRolls] = useState(getNullRollsArray());

  const handleAddRoll = useCallback((numberOfPins: number) => {
    setRolls(prevState => {
      const newRolls = [...prevState];
      newRolls[currentPosition.frame][currentPosition.roll] = numberOfPins;
      return newRolls;
    });

    if ((currentPosition.roll >= 1 || numberOfPins === 10) && currentPosition.frame < 9) {
      setCurrentPosition({
        frame: currentPosition.frame + 1,
        roll: 0
      });
    } else {
      setCurrentPosition({
        ...currentPosition,
        roll: currentPosition.roll + 1
      })
    }
  }, [currentPosition]);

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
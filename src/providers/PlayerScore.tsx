import React, {createContext, useContext, useState} from 'react';

type frame = {
  rolls: Array<number>,
  score: number,
  bonusPointsTicker: number
  isLastFrame: boolean
}

type PlayerScoreState = {
  frames: Array<frame>,
  currentFrame: number
}

type PlayerScoreProps = {
  children: JSX.Element[]
}

const getInitialFrames = () => {
  const frames = new Array<frame>(10);
  for (let i = 0; i < 10; i++) {
    frames[i] = {
      rolls: [],
      score: 0,
      bonusPointsTicker: 0,
      isLastFrame: i === 9
    }
  }
  return frames;
}

const initialState: PlayerScoreState = {
  frames: getInitialFrames(),
  currentFrame: 0
}

const PlayerScoreContext = createContext<PlayerScoreState>(null as any);
const AddRollDispatch = createContext<(rollValue: number) => void>(null as any);

const PlayerScoreProvider = ({ children }: PlayerScoreProps) => {
  const [state, setState] = useState(initialState)

  const addRoll = (rollValue: number) => {
    const newState = {...state};
    const currentFrame = newState.frames[state.currentFrame]
    for (const frame of newState.frames) {
      if (frame.bonusPointsTicker > 0) {
        frame.score += rollValue;
        currentFrame.score += rollValue;
        frame.bonusPointsTicker--;
      }
    }
    currentFrame.rolls.push(rollValue)
    currentFrame.score += rollValue
    if ((rollValue === 10 || currentFrame.rolls.length === 2) && !currentFrame.isLastFrame) {
      if(rollValue === 10 || currentFrame.rolls[0] + currentFrame.rolls[1] === 10){
        currentFrame.bonusPointsTicker = 3 - currentFrame.rolls.length
      }
      newState.currentFrame++;
      newState.frames[newState.currentFrame].score = currentFrame.score
    }

    setState(newState);
  }

  return (
    <PlayerScoreContext.Provider value={state}>
      <AddRollDispatch.Provider value={addRoll}>
        { children }
      </AddRollDispatch.Provider>
    </PlayerScoreContext.Provider>
  )
}

export function usePlayerScore(): PlayerScoreState {
  return useContext(PlayerScoreContext);
}
export function useAddRoll(): (rollValue: number) => void {
  return useContext(AddRollDispatch);
}
export default PlayerScoreProvider;
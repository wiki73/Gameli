import { useReducer } from "react";
import { GameContext } from "./GameContext";
import { gameReducer } from "./reducer";
import { initialState } from "./initialState";

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

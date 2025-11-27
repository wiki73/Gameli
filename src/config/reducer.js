export function gameReducer(state, action) {
  switch (action.type) {
    case "ADD_EXP":
      return { ...state, exp: state.exp + action.amount };

    case "ADD_GOLD":
      return { ...state, gold: state.gold + action.amount };

    case "SPEND_GOLD":
      return { ...state, gold: state.gold - action.amount };

    default:
      return state;
  }
}
import { Action } from "../types";

function setAllowTransition(state: boolean): Action {
  return {
    type: "SET_ALLOW_TRANSITION",
    payload: state,
  };
}

function setBackground(background: string): Action {
  return {
    type: "SET_BACKGROUND",
    payload: background,
  };
}

function setPosition(position: number): Action {
  return {
    type: "SET_POSITION",
    payload: position,
  };
}

function setSelectedId(selectedId: string): Action {
  return {
    type: "SET_SELECTED_ID",
    payload: selectedId,
  };
}

export { setAllowTransition, setBackground, setPosition, setSelectedId };

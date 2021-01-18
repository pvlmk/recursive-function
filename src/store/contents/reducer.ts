import { Action } from "../types";
import { initialState } from "./state";

export default function (state = initialState, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_ALLOW_TRANSITION":
      return { ...state, allowTransition: payload };
    case "SET_BACKGROUND":
      return { ...state, currentBackground: payload };
    case "SET_POSITION":
      return { ...state, currentPos: payload };
    case "SET_SELECTED_ID":
      return { ...state, selectedId: payload };
    default:
      return state;
  }
}

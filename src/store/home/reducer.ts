import { Action } from "../types";
import { initialState } from "./state";

export default function (state = initialState, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_HERO_COMPRESS":
      return { ...state, heroCompress: payload };
    case "SET_HERO_IS_COMPLETE":
      return { ...state, heroIsComplete: payload };
    case "SET_HERO_POSITION":
      return { ...state, heroPosition: payload };
    case "SET_HERO_SCALE":
      return { ...state, heroScale: payload };
    case "SET_PREVIEW_IS_COMPLETE":
      return { ...state, previewIsComplete: payload };
    case "SET_PREVIEW_OPACITY":
      return { ...state, previewOpacity: payload };
    default:
      return state;
  }
}

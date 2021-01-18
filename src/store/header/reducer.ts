import { Action } from "../types";
import { initialState } from "./state";

export default function (state = initialState, action: Action) {
  const { type, payload } = action;

  switch (type) {
    case "SET_IS_ASIDE_OPEN":
      return { ...state, isAsideOpen: payload };
    case "SET_IS_MENU_LOGO":
      return { ...state, isMenuLogo: payload };
    case "SET_IS_ORIGINAL_LOGO":
      return { ...state, isOriginalLogo: payload };
    case "SET_IS_SPOTLIGHT_EXPAND":
      return { ...state, isSpotlightExpand: payload };
    case "SET_LOGO_COLOR":
      return { ...state, logoColor: payload };
    default:
      return state;
  }
}

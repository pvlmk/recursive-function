import { Action } from "../types";

function setIsAsideOpen(state: boolean): Action {
  return {
    type: "SET_IS_ASIDE_OPEN",
    payload: state,
  };
}

function setIsMenuLogo(state: boolean): Action {
  return {
    type: "SET_IS_MENU_LOGO",
    payload: state,
  };
}

function setIsOriginalLogo(state: boolean): Action {
  return {
    type: "SET_IS_ORIGINAL_LOGO",
    payload: state,
  };
}

function setIsSpotlightExpand(state: boolean): Action {
  return {
    type: "SET_IS_SPOTLIGHT_EXPAND",
    payload: state,
  };
}

function setLogoColor(color: string): Action {
  return {
    type: "SET_LOGO_COLOR",
    payload: color,
  };
}

export {
  setIsAsideOpen,
  setIsMenuLogo,
  setIsOriginalLogo,
  setIsSpotlightExpand,
  setLogoColor,
};

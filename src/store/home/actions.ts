import { Action } from "../types";

function setHeroCompress(heroCompress: number): Action {
  return {
    type: "SET_HERO_COMPRESS",
    payload: heroCompress,
  };
}

function setHeroIsComplete(state: boolean): Action {
  return {
    type: "SET_HERO_IS_COMPLETE",
    payload: state,
  };
}

function setHeroPosition(heroPosition: number): Action {
  return {
    type: "SET_HERO_POSITION",
    payload: heroPosition,
  };
}

function setHeroScale(heroScale: number): Action {
  return {
    type: "SET_HERO_SCALE",
    payload: heroScale,
  };
}

function setPreviewIsComplete(state: boolean): Action {
  return {
    type: "SET_PREVIEW_IS_COMPLETE",
    payload: state,
  };
}

function setPreviewOpacity(value: number): Action {
  return {
    type: "SET_PREVIEW_OPACITY",
    payload: value,
  };
}

export {
  setHeroCompress,
  setHeroIsComplete,
  setHeroPosition,
  setHeroScale,
  setPreviewIsComplete,
  setPreviewOpacity,
};

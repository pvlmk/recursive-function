import data from "../../data/data";

const spotlightItems = data
  .filter(({ isSpotlight }) => isSpotlight)
  .map(({ id, isArticle, preview, title }) => {
    return {
      id,
      isArticle,
      preview,
      title,
    };
  });

interface State {
  isAsideOpen: boolean;
  isMenuLogo: boolean;
  isOriginalLogo: boolean;
  isSpotlightExpand: boolean;
  logoColor: string;
  spotlightItems: {
    id: string;
    isArticle: boolean;
    preview: string;
    title: string;
  }[];
}

const initialState: State = {
  isAsideOpen: false,
  isMenuLogo: false,
  isOriginalLogo: false,
  isSpotlightExpand: false,
  logoColor: "#000000",
  spotlightItems,
};

export { State as HeaderState, initialState };

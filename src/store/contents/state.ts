import data from "../../data/data";

const images = data
  .filter(({ isArticle }) => isArticle)
  .map(({ image }) => image);

interface State {
  images: string[];
  currentBackground: null | string;
  currentPos: null | number;
  startPos: number;
  endPos: number;
  allowTransition: boolean;
  selectedId: null | string;
}

const initialState: State = {
  images,
  currentBackground: null,
  currentPos: null,
  startPos: 0,
  endPos: images.length,
  allowTransition: false,
  selectedId: null,
};

export { State as ContentsState, initialState };

interface State {
  heroCompress: number;
  heroPosition: number;
  heroScale: number;
  heroIsComplete: boolean;
  previewIsComplete: boolean;
  previewOpacity: number;
}

const initialState: State = {
  heroCompress: null,
  heroPosition: null,
  heroScale: 1,
  heroIsComplete: false,
  previewIsComplete: false,
  previewOpacity: 0,
};

export { State as HomeState, initialState };

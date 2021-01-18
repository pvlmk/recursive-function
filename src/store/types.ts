import { ContentsState } from "./contents/state";
import { HeaderState } from "./header/state";
import { HomeState } from "./home/state";

interface Action {
  type: string;
  payload?: any;
}

type Dispatch = (action: Action) => void;

type State = {
  contents: ContentsState;
  header: HeaderState;
  home: HomeState;
};

export { Action, Dispatch, State };

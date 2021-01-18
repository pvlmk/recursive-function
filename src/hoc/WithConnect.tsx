import * as React from "react";

import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { State } from "../store/types";

type StateSelectors = { selector: string; section: string }[];
type DispatchActions = { [key: string]: (parameter?: any) => void };

// Higher-order component WithConnect designed for fast access to store.

// HOC takes 3 parameters:

// 1. Component - container component

// 2. stateSelectors - take array with objects which consists of:
//    'selector'(property from store)
//    'section'(reducer who keeps this property)

// 3. dispatchActions - take object with:
//    --- all actions - { ...Actions }
//    --- concrete action - { addTodo: TodoActions.addTodo }
//    --- together - { ...Actions, addTodo: TodoActions.addTodo } */

// HOW IT USE:

// import * as Actions from "./store/actions"
//    const ExampleComponent = (props) => {
//      ...
//      return <div>...</div>
//    }
//  export default WithConnect(
//      ExampleComponent,
//      [{selector: "theme", section: "app"}],
//      {...Actions}
//    )

function WithConnect<O = {}, S = {}, D = {}>(
  Component: React.FC,
  stateSelectors?: StateSelectors,
  dispatchActions?: DispatchActions
) {
  function ComponentWrapper(props: any) {
    return <Component {...props}>{props.children}</Component>;
  }

  const mapStateToProps: MapStateToProps<S, O> = (state: State) => {
    if (stateSelectors !== null) {
      const selectors: S = {} as S;

      stateSelectors.reduce((a, b) => {
        a[b.selector] = state[b.section][b.selector];
        return a;
      }, selectors);

      return selectors;
    }
  };

  const mapDispatchToProps: MapDispatchToProps<D, O> = (dispatch: Dispatch) => {
    if (dispatchActions !== null) {
      const actions: D = {} as D;

      Object.assign(
        actions,
        bindActionCreators({ ...dispatchActions }, dispatch)
      );

      return actions;
    }
  };

  return connect(
    stateSelectors !== null ? mapStateToProps : null,
    dispatchActions !== null ? mapDispatchToProps : null
  )(ComponentWrapper);
}

export default WithConnect;

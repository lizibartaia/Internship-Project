import { Action, createReducer, on } from "@ngrx/store";
import { initialState } from "./counter.state";
import { decrement, increment, reset } from "./counter.actions";

const _counterReducer = createReducer(initialState, on(increment, (state) => {
  return {
    ...state,
    counter: state.counter + 1,
  }
}),
on(decrement, (state) => {
  return {
    ...state,
    counter: state.counter - 1,
  };
}),
on(reset, (state) => {
  return {
    ...state,
    counter:0
  };
})
);

export function counterReducer(state: { counter: number; } | undefined, action: Action<string>) {

  return _counterReducer(state,action);

}

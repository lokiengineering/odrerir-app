// @flow
import { TOGGLE_MENU } from '../actions';
import type { Action } from './types';

export const initialState = {
  menuOpen: false,
}
export default function app(state = initialState, action: Action) {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    default:
      return state;
  }
}

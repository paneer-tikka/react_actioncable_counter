import Immutable from 'immutable';

import actionTypes from '../constants/helloWorldConstants';

export const $$initialState = Immutable.fromJS({
  name: '', // this is the default state that would be used if one were not passed into the store
  stats: {apples: 0, oranges: 0},
});

export default function helloWorldReducer($$state = $$initialState, action) {
  const { type, name, stats } = action;

  switch (type) {
    case actionTypes.HELLO_WORLD_NAME_UPDATE:
      return $$state.set('name', name);

    case actionTypes.STATS_UPDATE:
      return $$state.set('stats', stats);

    default:
      return $$state;
  }
}

import actionTypes from '../constants/helloWorldConstants';

export function updateName(name) {
  return {
    type: actionTypes.HELLO_WORLD_NAME_UPDATE,
    name,
  };
}

export function updateStats(stats) {
  return {
    type: actionTypes.STATS_UPDATE,
    stats: stats,
  }
}

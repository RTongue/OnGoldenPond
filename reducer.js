const Duck = require('./duck');

const INIT_POND = 'INIT_POND';
const ADD_DUCK = 'ADD_DUCK';
const DUCK_ADDED = 'DUCK_ADDED';
const EXIT = 'EXIT';

const newPond = (width, height) => {
  return {
    type: INIT_POND,
    pond: {
            width: Number(width),
            height: Number(height)
          }
  };
};

const newDuck = (x, y, orientation) => {
  return {
    type: ADD_DUCK,
    duck: new Duck(x, y, orientation)
  };
};

const toggleDuckAdded = () => {
  return {
    type: DUCK_ADDED
  };
};

const exit = () => {
  return {
    type: EXIT
  };
};

function reducer (state, action) {
  switch (action.type) {
    case INIT_POND:
      return Object.assign({}, state, { pond: action.pond });

    case ADD_DUCK:
      return Object.assign({}, state, { ducks: [...state.ducks, action.duck] });

    case DUCK_ADDED:
      return Object.assign({}, state, { duckAdded: !state.duckAdded });

    case EXIT:
      return Object.assign({}, state, { exitCalls: ++state.exitCalls });

    default:
      return state;
  }
}

module.exports = {
  reducer,
  newDuck,
  newPond,
  toggleDuckAdded,
  exit
};

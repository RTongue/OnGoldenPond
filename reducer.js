const Duck = require('./duck');

const INIT_POND = 'INIT_POND';
const ADD_DUCK = 'ADD_DUCK';
const DUCK_ADDED = 'DUCK_ADDED';

const newPond = (height, width) => {
  return {
    type: INIT_POND,
    pond: { height, width }
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

function reducer (state, action) {
  switch (action.type) {
    case INIT_POND:
      return Object.assign({}, state, { pond: action.pond });

    case ADD_DUCK:
      return Object.assign({}, state, { ducks: [...state.ducks, action.duck] });

    case DUCK_ADDED:
      return Object.assign({}, state, { duckAdded: !state.duckAdded });

    default:
      return state;
  }
}

module.exports = {
  reducer,
  newDuck,
  newPond,
  toggleDuckAdded
};

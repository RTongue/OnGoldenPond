const createStore = require('redux').createStore;
const { reducer } = require('./reducer');

const initialState = {
  pond: null,
  ducks: [],
  duckAdded: false,
  exitCalls: 0
};

const store = createStore(reducer, initialState);

module.exports = store;

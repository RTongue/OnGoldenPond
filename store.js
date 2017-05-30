const createStore = require('redux').createStore;
const { reducer, toggleDuckAdded } = require('./reducer');

const initialState = {
  pond: null,
  ducks: [],
  duckAdded: false
};

const store = createStore(reducer, initialState);

module.exports = store;

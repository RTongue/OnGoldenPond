const readline = require('readline');
const store = require('./store');
const { newPond,
        newDuck,
        toggleDuckAdded } = require('./reducer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (input) => {
  const { pond, duckAdded, ducks } = store.getState();
  if (!pond) {
    store.dispatch(newPond(...input.split(' ')));
  } else if (!duckAdded) {
    store.dispatch(newDuck(...input.split(' ')));
    store.dispatch(toggleDuckAdded());
  } else {
    const duck = ducks[ducks.length - 1];
    duck.parseInstructions(input);
    store.dispatch(toggleDuckAdded());
    console.log(duck.x, duck.y, duck.directions[duck.orientation]);
  }
});

// TODO: write message on quitting the simulator

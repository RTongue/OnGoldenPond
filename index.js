const readline = require('readline');
const { yellow, red } = require('chalk');
const store = require('./store');
const { welcome, goodbye } = require('./utils');
const { exit,
        newPond,
        newDuck,
        toggleDuckAdded } = require('./reducer');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

welcome(rl);

rl.on('line', (input) => {
  const { pond, duckAdded, ducks, exitCalls } = store.getState();

  if (exitCalls) return;

  if (!pond) {
    store.dispatch(newPond(...input.split(' ')));
  } else if (!duckAdded) {
    store.dispatch(newDuck(...input.split(' ')));
    store.dispatch(toggleDuckAdded());
  } else {
    const duck = ducks[ducks.length - 1];
    duck.parseInstructions(input);

    const duckPosition = duck.x + ' ' + duck.y + ' ' + duck.directions[duck.orientation];

    if (duck.inPond(pond)) {
      console.log(yellow(duckPosition));
    } else {
      console.log(red('This duck flew away! ' + duckPosition));
    }

    store.dispatch(toggleDuckAdded());
  }
});

rl.on('SIGINT', () => {
    store.dispatch(exit());
    goodbye(rl);
});

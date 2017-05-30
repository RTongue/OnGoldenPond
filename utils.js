const { cyan, yellow } = require('chalk');

const utils = {
	clear: (rl) => {
		rl.write('\033[2J');
		rl.write('\033[0f');
	},
  welcome: (rl) => {
    utils.clear(rl)
    const message = cyan('Welcome to ') + yellow('"On Golden Pond"') + cyan('!');
    rl.write(message + '\n');
  },
  goodbye: (rl) => {
		const message = cyan('Thanks for playing ') + yellow('"On Golden Pond"') + cyan('!\n');
    rl.write(message);
    rl.close();
  }
};

module.exports = utils

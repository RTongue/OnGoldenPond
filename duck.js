class Duck {
  constructor (x, y, orientation) {
    this.x = Number(x);
    this.y = Number(y);
    this.directions = ['N', 'E', 'S', 'W'];
    this.orientation = this.directions.indexOf(orientation);
  }

  parseInstructions (instructions) {
    for (let i = 0; i < instructions.length; i++) {
      const instruction = instructions[i];

      if (instruction === 'P') {
        this.orientation = this.orientation
                            ? this.orientation - 1
                            : 3;
      } else if (instruction === 'S') {
        this.orientation = this.orientation === 3
                            ? 0
                            : this.orientation + 1;
      } else {
        this.move(this.directions[this.orientation]);
      }
    }
  }

  move (direction) {
    switch (direction) {
      case 'N':
        this.y += 1;
        break;
      case 'S':
        this.y -= 1;
        break;
      case 'E':
        this.x += 1;
        break;
      case 'W':
        this.x -= 1;
        break;
      default:
        break;
    }
  }
}

module.exports = Duck;

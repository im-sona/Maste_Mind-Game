// src/api/mastermind.js

const PEGS_PER_ROW = 4;

function generateSecret(colors) {
  const max = colors.length;
  let s = [];
  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    const randomIndex = Math.floor(Math.random() * max);
    s[i] = colors[randomIndex];
  }
  return s.reverse();
}

function getHints(combination, secret) {
  const secretCombination = [...secret];
  const userCombination = [...combination];
  let black = 0;
  let white = 0;

  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    if (userCombination[i] === secretCombination[i]) {
      secretCombination[i] = userCombination[i] = null;
      black += 1;
    }
  }
  
  for (let i = 0; i < PEGS_PER_ROW; i += 1) {
    for (let x = 0; x < PEGS_PER_ROW; x += 1) {
      if (userCombination[i] && secretCombination[x]) {
        if (userCombination[i] === secretCombination[x]) {
          secretCombination[x] = userCombination[i] = null;
          white += 1;
        }
      }
    }
  }

  return { black, white };
}

const levels = {
  easy:   { attempts: 10, colors: ['yellow', 'orange', 'red', 'green', 'blue', 'purple'] },
  medium: { attempts: 8,  colors: ['yellow', 'orange', 'red', 'green', 'blue', 'purple', 'pink', 'brown'] },
  hard:   { attempts: 6,  colors: ['yellow', 'orange', 'red', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'white'] },
  god:    { attempts: 1,  colors: ['yellow', 'orange', 'red', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'white'] }
};

const startGame = (level) => {
  const selectedLevel = levels[level];
  const secret = generateSecret(selectedLevel.colors);
  return { currentAttempt: 1, status: 'playing', level: selectedLevel, secret };
};

const checkCombination = (combination, secret) => {
  const hints = getHints(combination, secret);
  const status = (hints.black === PEGS_PER_ROW) ? 'win' : 'playing';
  return { hints, status };
};

export default { startGame, checkCombination, PEGS_PER_ROW, getHints };

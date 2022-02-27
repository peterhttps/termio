import { Store } from 'pullstate';

export const GameStore = new Store<{ guesses: string[][], actualGuess: number }>({
  guesses: [
    ['', 'a', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
  ],
  actualGuess: 0
});

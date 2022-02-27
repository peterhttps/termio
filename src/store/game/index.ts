import { Store } from 'pullstate';
import ILetter from '../../interfaces/IGuess';

interface IGameStore {
  guesses: ILetter[][];
  actualGuess: number;
  winWord: string;
  wrongLetters: string[];
}

export const GameStore = new Store<IGameStore>({
  guesses: [],
  wrongLetters: [],
  actualGuess: 0,
  winWord: 'ARROZ',
});

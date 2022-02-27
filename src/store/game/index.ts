import winWords from 'database/winWords';
import moment from 'moment';
import { Store } from 'pullstate';
import ILetter from '../../interfaces/IGuess';

interface IGameStore {
  guesses: ILetter[][];
  actualGuess: number;
  winWord: string;
  wrongLetters: string[];
}

var startDate = moment("2022-02-27");
var endDate = moment(new Date());

export const GameStore = new Store<IGameStore>({
  guesses: JSON.parse(localStorage.getItem("guesses") || '[]') || [],
  wrongLetters: JSON.parse(localStorage.getItem("wrongLetters") || '[]') || [],
  actualGuess: 0,
  winWord: winWords[endDate.diff(startDate, "days")],
});

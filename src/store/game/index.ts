import winWords from 'database/winWords';
import moment from 'moment';
import { Store } from 'pullstate';
import ILetter from '../../interfaces/IGuess';

interface IGameStore {
  guesses: ILetter[][];
  actualGuess: number;
  winWord: string;
  wrongLetters: string[];
  correctLetters: string[];
  otherSpotLetters: string[];
  gameEnded: boolean;
}

var startDate = moment("2022-02-02");
var endDate = moment(new Date());

if (localStorage.getItem('oldUser') !== 'true') {
  localStorage.setItem("userInfo", JSON.stringify({
    games: 0,
    wins: 0,
    winArray: [0, 0, 0, 0, 0, 0],
  }));

  localStorage.setItem("oldUser", 'true');
}

const actualWord = winWords[endDate.diff(startDate, "days")]

if (actualWord !== localStorage.getItem("dayWord") && !!localStorage.getItem("dayWord")) {
  localStorage.removeItem("dayWord");
  localStorage.removeItem("guesses");
  localStorage.removeItem("correctLetters");
  localStorage.removeItem("wrongLetters");
  localStorage.removeItem("otherSpotLetters");
}

export const GameStore = new Store<IGameStore>({
  guesses: JSON.parse(localStorage.getItem("guesses") || '[]') || [],
  wrongLetters: JSON.parse(localStorage.getItem("wrongLetters") || '[]') || [],
  correctLetters: JSON.parse(localStorage.getItem("correctLetters") || '[]') || [],
  otherSpotLetters: JSON.parse(localStorage.getItem("otherSpotLetters") || '[]') || [],
  actualGuess: 0,
  winWord: actualWord,
  gameEnded: localStorage.getItem("dayWord") ? true : false,
});

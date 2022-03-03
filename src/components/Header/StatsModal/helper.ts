import moment from "moment";
import ILetter from "interfaces/IGuess";

var startDate = moment("2022-02-28");
var endDate = moment(new Date());

const NORMAL_MODE_EMOJIS: any = {
  'correct': '🟩',
  'other_spot': '🟨',
  'wrong': '⬛',
}

export function getShareMessage(
  guesses: ILetter[][],
  isGameWon: boolean,
): string {
  let message = `#${endDate.diff(startDate, "days")} (${isGameWon ? guesses.length : 'X'}/6) Termio \n\n`;

  message += guesses.map(guess => {
    return guess.map(letter => NORMAL_MODE_EMOJIS[letter.type]).join('') + '\n';
  }).join('');

  message += '\njogue em termio.com.br';

  return message;
}

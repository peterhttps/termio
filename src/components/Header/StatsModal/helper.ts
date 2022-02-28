import ILetter from "interfaces/IGuess";

const NORMAL_MODE_EMOJIS: any = {
  'correct': '🟩',
  'other_spot': '🟨',
  'wrong': '⬛',
}

export function getNormalEndGameMessage(
  guesses: ILetter[][],
  isGameWon: boolean,
): string {
  let message = `(${isGameWon ? guesses.length : 'X'}/6) Termio \n\n`;

  message += guesses.map(guess => {
    return guess.map(letter => NORMAL_MODE_EMOJIS[letter.type]).join('') + '\n';
  }).join('');

  message += '\njogue em termio.com.br';

  return message;
}

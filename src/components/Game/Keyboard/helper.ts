import { LETTER_TYPES } from "enumerators/defaultVariables";
import ILetter from "interfaces/IGuess";
import { addGuessWord, addWrongLetter } from "store/game/actions";

export const calculateWord = (word: string, winWord: string) => {
  const guessArray = Array.from(word);
  const finalArray: ILetter[] = [];
  const winWordArray = Array.from(winWord);

  guessArray.reverse().map((letter, indexCalc) => {
    const index = guessArray.length - 1 - indexCalc;
    if (winWord.includes(letter) && winWord[index] === letter) {
      winWordArray[index] = '';

      return (
        finalArray.push({
          letter: letter,
          type: LETTER_TYPES.CORRECT
        })
      )
    } else if (winWordArray.includes(letter)) {
      winWordArray[winWordArray.indexOf(letter)] = ''; 

      return (
        finalArray.push({
          letter: letter,
          type: LETTER_TYPES.OTHER_SPOT
        })
      )
    } else {
      addWrongLetter(letter);
      return (
        finalArray.push({
          letter: letter,
          type: LETTER_TYPES.WRONG
        })
      )
    }
  });

  addGuessWord(finalArray.reverse());
} 
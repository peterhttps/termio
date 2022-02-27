import wordsDB from "database/words";
import { LETTER_TYPES } from "enumerators/defaultVariables";
import ILetter from "interfaces/IGuess";
import { addGuessWord, addWrongLetter } from "store/game/actions";
import { setKeyboardWord } from "store/keyboard/actions";
import { setWrongAnimation } from '../../../store/animations/actions';

export const calculateWord = (word: string, winWord: string) => {
  const guessArray = Array.from(word);
  const finalArray: ILetter[] = [];
  let letterNormalized = winWord;
  letterNormalized = letterNormalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const winWordArray = Array.from(letterNormalized.toUpperCase());

  if (!wordsDB.includes(word.toLowerCase())) {
    setWrongAnimation(true);
    return false;
  }

  guessArray.map((letter, index) => {
    if (winWordArray.includes(letter) && winWordArray[index] === letter) {
      winWordArray[index] = '';
      
      return (
        finalArray.push({
          letter: winWord[index].toUpperCase(),
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
      const wrongLetters = JSON.parse(localStorage.getItem("wrongLetters") || '[]') || [];
      wrongLetters.push(letter);
      localStorage.setItem("wrongLetters", JSON.stringify(wrongLetters));

      return (
        finalArray.push({
          letter: letter,
          type: LETTER_TYPES.WRONG
        })
      )
    }
  });

  addGuessWord(finalArray);
  setKeyboardWord('');

  return true;
} 

export const saveGame = (guessWords: ILetter[][], word: string, winWord: string) => {
  if (!calculateWord(word, winWord)) {
    return;
  }

  localStorage.setItem("guesses", JSON.stringify(guessWords));
}
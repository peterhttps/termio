import wordsDB from "database/words";
import { LETTER_TYPES } from "enumerators/defaultVariables";
import ILetter from "interfaces/IGuess";
import { addGuessWord, addWrongLetter } from "store/game/actions";
import { setKeyboardWord } from "store/keyboard/actions";
import { setWrongAnimation } from '../../../store/animations/actions';
import { addOtherSpotLetters, addCorrectLetters } from '../../../store/game/actions';

const addCorrectKeyboard = (item: ILetter) => {
  addCorrectLetters(item.letter);
  const correctLetters = JSON.parse(localStorage.getItem("correctLetters") || '[]') || [];
  correctLetters.push(item.letter);
  localStorage.setItem("correctLetters", JSON.stringify(correctLetters));
}

const addOtherSpotKeyboard = (item: ILetter) => {
  addOtherSpotLetters(item.letter);
  const otherSpotLetters = JSON.parse(localStorage.getItem("otherSpotLetters") || '[]') || [];
  otherSpotLetters.push(item.letter);
  localStorage.setItem("otherSpotLetters", JSON.stringify(otherSpotLetters));
}

const addWrongKeyboard = (item: ILetter) => {
  addWrongLetter(item.letter);
  const wrongLetters = JSON.parse(localStorage.getItem("wrongLetters") || '[]') || [];
  wrongLetters.push(item.letter);
  localStorage.setItem("wrongLetters", JSON.stringify(wrongLetters));
}

export const validateWord = (word: string, winWord: string) => {
  const guessArray = Array.from(word);
  let letterNormalized = winWord;
  letterNormalized = letterNormalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const winWordArray = Array.from(letterNormalized.toUpperCase());

  if (!wordsDB.includes(word.toLowerCase())) {
    setWrongAnimation(true);
    return false;
  }

  const missingLetters = [];  
  const validatedGuess: ILetter[] = [];

  for (let i = 0; i < 5; i++) {
    const letterState = guessArray[i] === winWordArray[i] ? LETTER_TYPES.CORRECT : LETTER_TYPES.WRONG;

    validatedGuess.push({
      letter: guessArray[i],
      type: letterState,
    });

    if (letterState === LETTER_TYPES.WRONG) missingLetters.push(winWordArray[i]);
  }

  if (missingLetters.length) {
    const wrongLetters = validatedGuess.filter(guess => guess.type === LETTER_TYPES.WRONG);

    for (let guessLetter of wrongLetters) {
      const indexOnMissingLetters = missingLetters.indexOf(guessLetter.letter);

      if (indexOnMissingLetters !== -1) {
        guessLetter.type = LETTER_TYPES.OTHER_SPOT;
        missingLetters.splice(indexOnMissingLetters, 1);
      }
    }
  }

  validatedGuess.map(item => {
    if (item.type === LETTER_TYPES.CORRECT) {
      return (addCorrectKeyboard(item));
    }

    if (item.type === LETTER_TYPES.OTHER_SPOT) {
      return (addOtherSpotKeyboard(item));
    }

    if (item.type === LETTER_TYPES.WRONG) {
      return (addWrongKeyboard(item));
    }

    return (addWrongKeyboard(item));
  });
  console.log("FINISH");
  addGuessWord(validatedGuess);
  setKeyboardWord('');
  return true;
} 

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
      
      addCorrectLetters(letter);
      const correctLetters = JSON.parse(localStorage.getItem("correctLetters") || '[]') || [];
      correctLetters.push(letter);
      localStorage.setItem("correctLetters", JSON.stringify(correctLetters));

      return (
        finalArray.push({
          letter: winWord[index].toUpperCase(),
          type: LETTER_TYPES.CORRECT
        })
      )
    } else if (winWordArray.includes(letter)) {
      winWordArray[winWordArray.indexOf(letter)] = ''; 

      addOtherSpotLetters(letter);
      const otherSpotLetters = JSON.parse(localStorage.getItem("otherSpotLetters") || '[]') || [];
      otherSpotLetters.push(letter);
      localStorage.setItem("otherSpotLetters", JSON.stringify(otherSpotLetters));

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
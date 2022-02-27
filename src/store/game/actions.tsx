import ILetter from "interfaces/IGuess";
import { GameStore } from ".";

export const addGuessWord = (finalArray: ILetter[]) =>
  GameStore.update(s => {
    s.guesses.push(finalArray);
  });

export const addWrongLetter = (letter: string) =>
  GameStore.update(s => {
    s.wrongLetters.push(letter);
  });

export const addAtualGuess = () =>
  GameStore.update(s => {
    s.actualGuess += 1;
  });
  

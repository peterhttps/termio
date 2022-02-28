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

export const addOtherSpotLetters = (letter: string) =>
  GameStore.update(s => {
    s.otherSpotLetters.push(letter);
  });

export const addCorrectLetters = (letter: string) =>
  GameStore.update(s => {
    s.correctLetters.push(letter);
  });

export const addAtualGuess = () =>
  GameStore.update(s => {
    s.actualGuess += 1;
  });

export const setGameEnded = (value: boolean) =>
  GameStore.update(s => {
    s.gameEnded = value;
  });
  

import { GameStore } from ".";

export const setGuessWord = (actualGuess: number, word: string) =>
  GameStore.update(s => {
    s.guesses[actualGuess] = Array.from(word);
  });
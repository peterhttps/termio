import { KeyboardStore } from ".";

export const setKeyboardWord = (word: string) =>
  KeyboardStore.update(s => {
    s.word = word;
  });
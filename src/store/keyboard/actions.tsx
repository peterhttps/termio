import { KeyboardStore } from ".";

export const setKeyboardWord = (word: string) =>
  KeyboardStore.update(s => {
    s.word = word;
  });

export const addKeyboardLetter = (word: string) =>
  KeyboardStore.update(s => {
    s.word += word;
  });

export const removeKeyboardLetter = () =>
  KeyboardStore.update(s => {
    s.word = s.word.slice(0, -1);
  });
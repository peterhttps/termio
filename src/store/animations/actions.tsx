import { AnimationStore } from ".";

export const setWrongAnimation = (value: boolean) =>
  AnimationStore.update(s => {
    s.wrongWord = value;
  });

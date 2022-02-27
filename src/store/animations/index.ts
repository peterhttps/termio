import { Store } from 'pullstate';

export const AnimationStore = new Store<{ wrongWord: boolean }>({
  wrongWord: false,
});

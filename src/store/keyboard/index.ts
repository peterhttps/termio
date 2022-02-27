import { Store } from 'pullstate';

export const KeyboardStore = new Store<{ word: string }>({
  word: ''
});

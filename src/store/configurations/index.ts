import { Store } from 'pullstate';

export const ConfigurationsStore = new Store<{ colorBlindMode: boolean }>({
  colorBlindMode: JSON.parse(localStorage.getItem('colorBlindMode') || 'false'),
});

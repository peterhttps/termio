import { ConfigurationsStore } from ".";

export const setColorBlindMode = (value: boolean) =>
  ConfigurationsStore.update(s => {
    localStorage.setItem('colorBlindMode', JSON.stringify(value));
    s.colorBlindMode = value;
  });

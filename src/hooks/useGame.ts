import { GameStore } from 'store/game';

const useGame = () => GameStore.useState(s => s);

export { useGame };

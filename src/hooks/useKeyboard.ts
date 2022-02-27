import { KeyboardStore } from 'store/keyboard';

const useKeyboard = () => KeyboardStore.useState(s => s);

export { useKeyboard };

import { AnimationStore } from 'store/animations';

const useAnimations = () => AnimationStore.useState(s => s);

export { useAnimations };

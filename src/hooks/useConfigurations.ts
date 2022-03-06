import { ConfigurationsStore } from 'store/configurations';

const useConfigurations = () => ConfigurationsStore.useState(s => s);

export { useConfigurations };

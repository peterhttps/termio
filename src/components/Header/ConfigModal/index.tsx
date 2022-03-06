import React, { useEffect, useState } from 'react';
import Switch from "react-switch";
import { setColorBlindMode } from 'store/configurations/actions';
import { ConfigItem, Container, InspiredPhrase, VersionLabel, Wrapper } from './styles';
import { useConfigurations } from 'hooks';

interface IProps {
  setOpenConfigModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfigModal: React.FC<IProps> = ({ setOpenConfigModal }: IProps) => {
  const configuration = useConfigurations();
  const [isColorblindActive, setIsColorblindActive] = useState<boolean>(configuration.colorBlindMode);

  useEffect(() => {
    setColorBlindMode(isColorblindActive);
  }, [isColorblindActive])

  return (
    <Wrapper onClick={() => setOpenConfigModal(false)}>
      <Container onClick={() => setOpenConfigModal(false)}>
        <ConfigItem onClick={(e) => e.stopPropagation()}>
          <h4>Modo daltonismo</h4>
          <Switch 
            checked={isColorblindActive} 
            onChange={checked => setIsColorblindActive(checked)}
            checkedIcon={false}
            uncheckedIcon={false} 
            height={24}
            width={52}/>
        </ConfigItem>
        <InspiredPhrase>Termio é inspirado em <a href='https://www.nytimes.com/games/wordle/index.html' target="_blank" rel="noreferrer">Wordle</a></InspiredPhrase>
        <VersionLabel>v0.1.0</VersionLabel>
      </Container>
    </Wrapper>
  );
}

export default ConfigModal;
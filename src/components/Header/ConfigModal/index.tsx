import React from 'react';
import { Container, InspiredPhrase, VersionLabel, Wrapper } from './styles';

interface IProps {
  setOpenConfigModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfigModal: React.FC<IProps> = ({ setOpenConfigModal }: IProps) => {
  return (
    <Wrapper onClick={() => setOpenConfigModal(false)}>
      <Container onClick={() => setOpenConfigModal(false)}>
        <InspiredPhrase>Termio é inspirado em <a href='https://www.nytimes.com/games/wordle/index.html' target="_blank" rel="noreferrer">Wordle</a></InspiredPhrase>
        <VersionLabel>v0.0.1</VersionLabel>
      </Container>
    </Wrapper>
  );
}

export default ConfigModal;
import React from 'react';
import GuessList from './GuessList';
import Keyboard from './Keyboard';

import { Wrapper } from './styles';

const Game: React.FC = () => {
  return (
    <Wrapper>
      <GuessList />
      <Keyboard />
    </Wrapper>
  );
}

export default Game;
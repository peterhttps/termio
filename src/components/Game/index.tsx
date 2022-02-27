import React from 'react';
import GuessList from './GuessList';
import Keyboard from './Keyboard';

import { Wrapper } from './styles';

const WORD_SIZE = 5;
const GUESS_QUANTITY = 6;

const Game: React.FC = () => {
  return (
    <Wrapper>
      <GuessList word_size={WORD_SIZE} guess_quantity={GUESS_QUANTITY} />
      <Keyboard />
    </Wrapper>
  );
}

export default Game;
import React from 'react';
import Game from '../Game';
import Header from '../Header';

import { Wrapper } from './styles';

const Application: React.FC = () => {
  return (
    <Wrapper height={`${window.innerHeight}px`}>
      <Header />
      <Game />
    </Wrapper>
  );
}

export default Application;
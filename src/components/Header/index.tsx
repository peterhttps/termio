import React from 'react';
import { FaQuestion, FaRegSun } from 'react-icons/fa';

import { OptionsContainer, Wrapper } from './styles';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <OptionsContainer>
        <FaQuestion size={20} color={"#B1A7A6"} />
      </OptionsContainer>
      <h1>TERMIO</h1>  
      <OptionsContainer>
        <FaRegSun size={20} color={"#B1A7A6"} />
      </OptionsContainer>
    </Wrapper>
  );
}

export default Header;
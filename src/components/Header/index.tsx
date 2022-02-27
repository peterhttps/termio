import React, { useState } from 'react';
import { FaQuestion, FaRegSun } from 'react-icons/fa';
import RulesModal from './RulesModal';

import { OptionsButton, OptionsContainer, Wrapper } from './styles';

const Header: React.FC = () => {
  const [openRulesModal, setOpenRulesModal] = useState(false);
  
  return (
    <Wrapper>
      <OptionsContainer>
        <OptionsButton onClick={() => setOpenRulesModal(true)}>
          <FaQuestion size={20} color={"#B1A7A6"} />
        </OptionsButton>
      </OptionsContainer>
      <h1>TERMIO</h1>  
      <OptionsContainer>
        <OptionsButton>
          <FaRegSun size={20} color={"#B1A7A6"} />
        </OptionsButton>
      </OptionsContainer>

      {openRulesModal && <RulesModal setOpenRulesModal={setOpenRulesModal} />}
    </Wrapper>
  );
}

export default Header;
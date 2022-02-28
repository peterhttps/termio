import React, { useEffect, useState } from 'react';
import { useGame } from 'hooks';
import { FaQuestion, FaRegSun, FaRegUserCircle, FaChartBar } from 'react-icons/fa';
import RulesModal from './RulesModal';
import StatsModal from './StatsModal/index';

import { OptionsButton, OptionsContainer, Wrapper } from './styles';
import ConfigModal from './ConfigModal';
import AboutModal from './AboutModal';

const Header: React.FC = () => {
  const game = useGame();
  const [openRulesModal, setOpenRulesModal] = useState(false);
  const [openStatsModal, setOpenStatsModal] = useState(false);
  const [openConfigModal, setOpenConfigModal] = useState(false);
  const [openAboutModal, setOpenAboutModal] = useState(false);
  
  useEffect(() => {
    if (game.gameEnded) {
      setOpenStatsModal(true);
    }
  }, [game.gameEnded]);

  return (
    <Wrapper>
      <OptionsContainer>
        <OptionsButton onClick={() => setOpenAboutModal(true)}>
          <FaRegUserCircle size={20} color={"#B1A7A6"} />
        </OptionsButton>
        <OptionsButton onClick={() => setOpenRulesModal(true)}>
          <FaQuestion size={20} color={"#B1A7A6"} />
        </OptionsButton>
      </OptionsContainer>
      <h1>TERMIO</h1>  
      <OptionsContainer>
        <OptionsButton onClick={() => setOpenStatsModal(true)}>
          <FaChartBar size={20} color={"#B1A7A6"} />
        </OptionsButton>
        <OptionsButton>
          <FaRegSun size={20} color={"#B1A7A6"} onClick={() => setOpenConfigModal(true)}/>
        </OptionsButton>
      </OptionsContainer>

      {openRulesModal && <RulesModal setOpenRulesModal={setOpenRulesModal} />}
      {openStatsModal && <StatsModal setOpenStatsModal={setOpenStatsModal} />}
      {openConfigModal && <ConfigModal setOpenConfigModal={setOpenConfigModal} />}
      {openAboutModal && <AboutModal setOpenAboutModal={setOpenAboutModal} />}
    </Wrapper>
  );
}

export default Header;
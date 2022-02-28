import React, { useState } from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { useGame } from 'hooks';

import { Wrapper, Container, BigNumber, NumberDescription, StatsContainer, StatsWrapper, GraphContainer, GraphTitle, GraphRow, GraphNumber, GraphProgress, ShareButton, MessageContainer } from './styles';
import IUser from '../../../interfaces/IUser';
import NextWordCount from '../NextWordCount';
import { getNormalEndGameMessage } from './helper';

interface IProps {
  setOpenStatsModal: React.Dispatch<React.SetStateAction<boolean>>
}
const StatsModal: React.FC<IProps> = ({ setOpenStatsModal }: IProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<IUser>(JSON.parse(localStorage.getItem("userInfo") || '[]'));
  const game = useGame();
  const [messageCopied, setMessageCopied] = useState(false);

  const calculateVictoryPercent = () => {
    if (user.wins === 0) {
      return 0
    }
    
    const wins = user.wins * 100;

    const stringCalculated = (wins / user.games).toFixed(2).toString();

    if (stringCalculated[stringCalculated.length - 1] === '0' && 
        stringCalculated[stringCalculated.length - 2] === '0' &&
        stringCalculated[stringCalculated.length - 3] === '.') {
          return (stringCalculated.substring(0, stringCalculated.length - 3));
        }

    return stringCalculated;
  }

  const calculateWidhtProgress = (index: number) => {
    if (user.winArray[index] === 0) {
      return 5;
    }

    const games = user.winArray[index] * 100;

    return (games / user.wins).toFixed(2).toString();
  }

  const shareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(localStorage.getItem("wonToday"))
    e.stopPropagation();
    const message = getNormalEndGameMessage(game.guesses, JSON.parse(localStorage.getItem("wonToday") || 'false'));
    navigator.clipboard.writeText(message);
    setMessageCopied(true)
  }

  return (
    <Wrapper onClick={() => setOpenStatsModal(false)}>
      <Container onClick={() => setOpenStatsModal(false)}>
        <h1>Estatísticas</h1>

        <StatsWrapper>
          <StatsContainer>
            <BigNumber>{user.games}</BigNumber>
            <NumberDescription>Jogos jogados</NumberDescription>  
          </StatsContainer>

          <StatsContainer>
            <BigNumber>{calculateVictoryPercent()}%</BigNumber>
            <NumberDescription>De vitórias</NumberDescription>  
          </StatsContainer>
        </StatsWrapper>

        <GraphContainer>
          <GraphTitle>Distribuição de partidas</GraphTitle>
          <GraphRow>
            <GraphNumber>1</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(0) + '%'}>
              <p>{user.winArray[0]}</p>
            </GraphProgress>
          </GraphRow>
          <GraphRow>
            <GraphNumber>2</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(1) + '%'}>
               <p>{user.winArray[1]}</p>
            </GraphProgress>
          </GraphRow>
          <GraphRow>
            <GraphNumber>3</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(2) + '%'}>
               <p>{user.winArray[2]}</p>
            </GraphProgress>
          </GraphRow>
          <GraphRow>
            <GraphNumber>4</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(3) + '%'}>
               <p>{user.winArray[3]}</p>
            </GraphProgress>
          </GraphRow>
          <GraphRow>
            <GraphNumber>5</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(4) + '%'}>
               <p>{user.winArray[4]}</p>
            </GraphProgress>
          </GraphRow>
          <GraphRow>
            <GraphNumber>6</GraphNumber>
            <GraphProgress width={calculateWidhtProgress(5) + '%'}>
               <p>{user.winArray[5]}</p>
            </GraphProgress>
          </GraphRow>
        </GraphContainer>

        {localStorage.getItem("dayWord") && 
        <ShareButton onClick={shareClick}>
          <FaShareAlt color={"#fff"} size={20} />
          Compartilhar
        </ShareButton>}

        <NextWordCount />
      </Container>

      {messageCopied && 
        <MessageContainer>
          <div>
            <p>Resultado copiado</p>
          </div>
        </MessageContainer>
      }

    </Wrapper>
  );
}

export default StatsModal;
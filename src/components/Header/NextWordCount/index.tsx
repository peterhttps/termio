import React from 'react';
import moment from 'moment';
import Timer from "react-compound-timer";  

import { TimerContainer, Wrapper } from './styles';

const targetDay  = moment().add(1,'days');
targetDay.set({hour:0,minute:0,second:0,millisecond:0});

const NextWordCount: React.FC = () => {

  const counterValue = () => {
    const nowT = moment();
    const duration = targetDay.diff(nowT, 'milliseconds');

    return duration;
  }

  return (
    <Wrapper>
      <h1>Próxima palavra em</h1>
      <TimerContainer>
        <Timer 
          initialTime={counterValue()} 
          direction="backward"
          formatValue={(value) => `${(value < 10 ? `0${value}` : value)}`}>
          <Timer.Hours />:
          <Timer.Minutes />:
          <Timer.Seconds />
        </Timer>
      </TimerContainer>

    </Wrapper>
  );
}

export default NextWordCount;
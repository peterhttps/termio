import React, { useEffect, useState } from 'react';
import { useAnimations, useGame, useKeyboard } from 'hooks';
import { LetterBox, LineContainer, Wrapper } from './styles';
import { setWrongAnimation } from '../../../store/animations/actions';
import { LETTER_TYPES } from '../../../enumerators/defaultVariables';
import { setGameEnded } from 'store/game/actions';
import IUser from 'interfaces/IUser';

const wordCount = [1, 2, 3, 4, 5];

const wrontAnimationVariants = {
  wrontAnimation: { x: [10, 0, -10, 0, 10, 0, -10, 0] },
  idle: { x: 0 },
}

const GuessList: React.FC = () => {
  const game = useGame();
  const keyboard = useKeyboard();
  const animations = useAnimations();
  const [showDisabledArray, setShowDisabledArray] = useState(true);

  useEffect(() => {
    if (game.guesses.length === 6) {
      setShowDisabledArray(false);
    }
  }, [game.guesses.length]);

  useEffect(() => {
    if (game.guesses.length === 6 && !localStorage.getItem("dayWord")) {
      localStorage.setItem("dayWord", game.winWord);
      const user: IUser = JSON.parse(localStorage.getItem("userInfo") || '{}');
      user.games += 1;
      localStorage.setItem("userInfo", JSON.stringify(user));

      setGameEnded(true);
    }

    let count = 0;
    game.guesses[game.guesses.length - 1]?.map((item) => {
      if (item.type === LETTER_TYPES.CORRECT) {
        count += 1;
      }
      return 0;      
    })

    if (count === 5 && !localStorage.getItem("dayWord")) {
      localStorage.setItem("dayWord", game.winWord);
      const user: IUser = JSON.parse(localStorage.getItem("userInfo") || '{}');
      user.games += 1;
      user.wins += 1;
      
      if (user.winArray) {
        user.winArray[game.guesses.length -  1] += 1;
      }
      
      localStorage.setItem("userInfo", JSON.stringify(user));

      setGameEnded(true);
    }
  }, [game.guesses, game.guesses.length, game.winWord]);

  const arraySize = () => {
    if (game.gameEnded) {
      return 6 - game.guesses.length;
    }

    if (game.guesses.length < 5) {
      return 5 - game.guesses.length;
    } else {
      return 0;
    }
  }

  return (
    <Wrapper>
      {game.guesses.map((item, i) => {
        return (
          <LineContainer key={i}>
              {wordCount.map((cell, j) => <LetterBox key={cell + '-' + item} type={game.guesses[i][j].type}>{game.guesses[i][j].letter?.toUpperCase()}</LetterBox>)}
          </LineContainer>
        )
      })}
      
      {showDisabledArray && !game.gameEnded && !localStorage.getItem("dayWord") && 
      <LineContainer 
          variants={wrontAnimationVariants}
          transition={{ duration: 0.3 }}
          animate={animations.wrongWord ? 'wrontAnimation' : 'idle' }
          onAnimationComplete={() => setWrongAnimation(false)}>
        {wordCount.map((cell, j) => <LetterBox key={j}>{keyboard.word[j]}</LetterBox>)}
      </LineContainer>}

      {showDisabledArray && [...Array(arraySize())].map((item, i) => {
        return (
          <LineContainer key={i}>
            {wordCount.map((cell, j) => <LetterBox key={cell + '-' + item} disabled />)}
          </LineContainer>
        )
      })}
    </Wrapper>
  );
}

export default GuessList;
import React, { useEffect, useState } from 'react';
import { useAnimations, useGame, useKeyboard } from 'hooks';
import { LetterBox, LineContainer, Wrapper } from './styles';
import { setWrongAnimation } from '../../../store/animations/actions';

const wordCount = [1, 2, 3, 4, 5];

const wrontAnimationVariants = {
  wrontAnimation: { x: [20, 0, -20, 0, 20, 0, -20, 0] },
  idle: { x: 0 },
}

const GuessList: React.FC = () => {
  const game = useGame();
  const keyboard = useKeyboard();
  const animations = useAnimations();
  const [showDisabledArray, setShowDisabledArray] = useState(true);

  useEffect(() => {
    if (game.guesses.length === 6) {
      setShowDisabledArray(false)
    }
  }, [game.guesses.length]);

  return (
    <Wrapper>
      {game.guesses.map((item, i) => {
        return (
          <LineContainer key={i}>
              {wordCount.map((cell, j) => <LetterBox key={cell + '-' + item} type={game.guesses[i][j].type}>{game.guesses[i][j].letter?.toUpperCase()}</LetterBox>)}
          </LineContainer>
        )
      })}
      
      {showDisabledArray && 
      <LineContainer 
          variants={wrontAnimationVariants}
          transition={{ duration: 0.3 }}
          animate={animations.wrongWord ? 'wrontAnimation' : 'idle' }
          onAnimationComplete={() => setWrongAnimation(false)}>
        {wordCount.map((cell, j) => <LetterBox key={j}>{keyboard.word[j]}</LetterBox>)}
      </LineContainer>}

      {showDisabledArray && [...Array(game.guesses.length < 5 ? 5 - game.guesses.length : 0)].map((item, i) => {
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
import React, { useEffect, useState } from 'react';
import { useGame, useKeyboard } from 'hooks';
import { LetterBox, LineContainer, Wrapper } from './styles';

interface IProps {
  guess_quantity: number;
  word_size: number
}

// const a = [1, 2, 3, 4, 5, 6];
const b = [1, 2, 3, 4, 5];

const GuessList: React.FC<IProps> = ({ guess_quantity, word_size }: IProps) => {
  const game = useGame();
  const keyboard = useKeyboard();
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
            {b.map((cell, j) => <LetterBox key={cell + '-' + item} type={game.guesses[i][j].type}>{game.guesses[i][j].letter?.toUpperCase()}</LetterBox>)}
         </LineContainer>
       )
     })}
     
     {showDisabledArray && <LineContainer>
       {b.map((cell, j) => <LetterBox key={j}>{keyboard.word[j]}</LetterBox>)}
     </LineContainer>}

    {showDisabledArray && [...Array(game.guesses.length < 5 ? 5 - game.guesses.length : 0)].map((item, i) => {
      return (
        <LineContainer key={i}>
          {b.map((cell, j) => <LetterBox key={cell + '-' + item} disabled />)}
        </LineContainer>
      )
    })}

    </Wrapper>
  );
}

export default GuessList;
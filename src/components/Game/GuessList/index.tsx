import { useGame } from 'hooks';
import React from 'react';
import { LetterBox, LineContainer, Wrapper } from './styles';

interface IProps {
  guess_quantity: number;
  word_size: number
}

const a = [1, 2, 3, 4, 5, 6];
const b = [1, 2, 3, 4, 5];

const GuessList: React.FC<IProps> = ({ guess_quantity, word_size }: IProps) => {
  const game = useGame();

  return (
    <Wrapper>
     {a.map((item, i) => {
       return (
         <LineContainer key={item}>
            {b.map((cell, j) => <LetterBox key={cell + '-' + item}>{game.guesses[i][j]?.toUpperCase()}</LetterBox>)}
         </LineContainer>
       )
     })}
    </Wrapper>
  );
}

export default GuessList;
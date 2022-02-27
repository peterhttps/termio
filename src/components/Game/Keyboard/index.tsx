import React, { useState } from 'react';
import { useGame } from 'hooks';
import { FaBackspace, FaCheck } from 'react-icons/fa';
import { KeyboardButton, KeyboardLine, OptionsButton, OptionsContainer, Wrapper } from './styles';
import { setGuessWord } from 'store/game/actions';
import { useEffect } from 'react';

export const KEY_BACKSPACE = 'Backspace';
export const KEY_ENTER = 'Enter';
export const KEY_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const FIRST_LINE =  'QWERTYUIOP';
const SECOND_LINE =  'ASDFGHJKL';
const THIRD_LINE =  'ZXCVBNM';

const Keyboard: React.FC = () => {
  const game = useGame();
  const [actualWord, setActualWord] = useState('');

  const clickKeyboard = (letter: string) => {
    if (actualWord.length < 5) {
      setActualWord(word => word + letter)
    }
  }

  const handleKeyboardBack = () => {
    setActualWord(word => word.slice(0, -1));
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KEY_BACKSPACE) {
      handleKeyboardBack();
      return;
    }

    // if (event.key === KEY_ENTER && buttonStates.enter) {
    //   handleKeyboardEnter();
    //   return;
    // }

    if (KEY_LETTERS.includes(event.key)) {
      clickKeyboard(event.key.toUpperCase());
    }
  }

  useEffect(() => {
    setGuessWord(game.actualGuess, actualWord);
  }, [actualWord, game.actualGuess]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Wrapper>
      <OptionsContainer>
        <OptionsButton onClick={handleKeyboardBack}>
          <FaBackspace color={"#B1A7A6"} size={24} />
        </OptionsButton>
        <OptionsButton>
          <FaCheck color={"#B1A7A6"} size={20} />
        </OptionsButton>
      </OptionsContainer>
      <KeyboardLine>
        {Array.from(FIRST_LINE).map(letter => <KeyboardButton key={letter} onClick={() => clickKeyboard(letter)}>{letter}</KeyboardButton>)}        
      </KeyboardLine>
      <KeyboardLine>
        {Array.from(SECOND_LINE).map(letter => <KeyboardButton key={letter} onClick={() => clickKeyboard(letter)}>{letter}</KeyboardButton>)}        
      </KeyboardLine>
      <KeyboardLine>
        {Array.from(THIRD_LINE).map(letter => <KeyboardButton key={letter} onClick={() => clickKeyboard(letter)}  >{letter}</KeyboardButton>)}        
      </KeyboardLine>
   </Wrapper>
  );
}

export default Keyboard;
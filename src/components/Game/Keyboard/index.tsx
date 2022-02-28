import React, { useEffect } from 'react';
import { useGame, useKeyboard } from 'hooks';
import { FaBackspace, FaCheck } from 'react-icons/fa';
import { KeyboardButton, KeyboardLine, OptionsButton, OptionsContainer, Wrapper } from './styles';
import { setKeyboardWord, addKeyboardLetter, removeKeyboardLetter } from '../../../store/keyboard/actions';
import { validateWord } from './helper';

export const KEY_BACKSPACE = 'Backspace';
export const KEY_ENTER = 'Enter';
export const KEY_LETTERS = 'abcdefghijklmnopqrstuvwxyz';

const FIRST_LINE =  'QWERTYUIOP';
const SECOND_LINE =  'ASDFGHJKL';
const THIRD_LINE =  'ZXCVBNM';

const Keyboard: React.FC = () => {
  const game = useGame();
  const keyboard = useKeyboard();

  const clickKeyboard = (letter: string) => {
    if (keyboard.word.length < 5 && !game.gameEnded) {
      addKeyboardLetter(letter);
    }
  }

  const handleKeyboardBack = () => {
    removeKeyboardLetter();
  }

  const handleKeyboardEnter = () => {
    if (keyboard.word.length === 5) {
      if (game.guesses.length < 6) {
        validateWord(keyboard.word, game.winWord);   
      }
    }
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === KEY_BACKSPACE) {
      handleKeyboardBack();
      return;
    }

    if (event.key === KEY_ENTER) {
      handleKeyboardEnter();
      return;
    }

    if (KEY_LETTERS.includes(event.key)) {
      clickKeyboard(event.key.toUpperCase());
    }
  }

  useEffect(() => {
    setKeyboardWord(keyboard.word.substring(0, 5));
  }, [keyboard.word]);

  useEffect(() => {
    if (game.guesses.length !== 0) {
      localStorage.setItem("guesses", JSON.stringify(game.guesses));
    }
  }, [game.guesses]);

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
        <OptionsButton onClick={handleKeyboardEnter}>
          <FaCheck color={"#B1A7A6"} size={20} />
        </OptionsButton>
      </OptionsContainer>
      <KeyboardLine>
        {Array.from(FIRST_LINE).map(letter => <KeyboardButton 
                                                key={letter} 
                                                onClick={() => clickKeyboard(letter)} 
                                                wrongWord={game.wrongLetters.includes(letter)}
                                                correct={game.correctLetters.includes(letter)}
                                                otherSpot={game.otherSpotLetters.includes(letter)}>
                                                  {letter}
                                                </KeyboardButton>)}        
      </KeyboardLine>
      <KeyboardLine>
        {Array.from(SECOND_LINE).map(letter => <KeyboardButton 
                                                key={letter} 
                                                onClick={() => clickKeyboard(letter)} 
                                                wrongWord={game.wrongLetters.includes(letter)}
                                                correct={game.correctLetters.includes(letter)}
                                                otherSpot={game.otherSpotLetters.includes(letter)}>
                                                  {letter}
                                                </KeyboardButton>)}        
      </KeyboardLine>
      <KeyboardLine>
        {Array.from(THIRD_LINE).map(letter => <KeyboardButton 
                                                key={letter} 
                                                onClick={() => clickKeyboard(letter)} 
                                                wrongWord={game.wrongLetters.includes(letter)}
                                                correct={game.correctLetters.includes(letter)}
                                                otherSpot={game.otherSpotLetters.includes(letter)}>
                                                  {letter}
                                                </KeyboardButton>)}        
      </KeyboardLine>
   </Wrapper>
  );
}

export default Keyboard;
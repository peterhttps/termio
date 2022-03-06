import { LETTER_TYPES } from 'enumerators/defaultVariables';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const LetterBox = styled.div<{ 
  disabled?: boolean, 
  type?: string,
  isColorblindMode?: boolean,
  }>`
  width: 70px;
  height: 70px;
  border: 3px solid #B1A7A6;
  margin: 4px;
  border-radius: 10%;
  
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  font-weight: 800;
  line-height: 0;
  color: #F5F3F4;

  ${props => props.type === LETTER_TYPES.CORRECT && css`
    background: #00A32D;
    border: 3px solid transparent;
  `}

  ${props => props.type === LETTER_TYPES.CORRECT && props.isColorblindMode && css`
    background: #648fff;
    border: 3px solid transparent;
  `}

  ${props => props.type === LETTER_TYPES.WRONG && css`
    background: #333333;
    border: 3px solid transparent;
  `}

  ${props => props.type === LETTER_TYPES.OTHER_SPOT && css`
    background: #F7A32D;
    border: 3px solid transparent;
  `}

  
  ${props => props.type === LETTER_TYPES.OTHER_SPOT && props.isColorblindMode && css`
    background: #fe6100;
    border: 3px solid transparent;
  `}

  ${props => props.disabled && css`
    background: #B1A7A6;
  `}

  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
    font-size: 32px;
  }

  @media only screen and (max-height: 850px) {
    width: 50px;
    height: 50px;
    font-size: 32px;
  }

  @media only screen and (max-height: 700px) {
    width: 35px;
    height: 35px;
    font-size: 24px;
  }
`;

export const LineContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export const MessageContainer = styled.div`
  display: flex;
  z-index: 999;
  position: absolute; 
  left: 0; 
  right: 0; 
  top: 64px;
  margin-left: auto; 
  margin-right: auto; 
  justify-content: center;
  pointer-events: none;

  & div {
    padding: 16px 32px;
    background: #E5383B;
    border-radius: 10px;
    color: #fff;
    font-weight: 900;
  }
`;
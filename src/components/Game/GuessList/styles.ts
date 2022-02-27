import { LETTER_TYPES } from 'enumerators/defaultVariables';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const LetterBox = styled.div<{ disabled?: boolean, type?: string }>`
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

  ${props => props.type === LETTER_TYPES.WRONG && css`
    background: #333333;
    border: 3px solid transparent;
  `}

  ${props => props.type === LETTER_TYPES.OTHER_SPOT && css`
    background: #F7A32D;
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
`;

export const LineContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
`;

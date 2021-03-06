import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 16px;
`;

export const OptionsContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

export const OptionsButton = styled.button`
  background: #231f20;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 40px;
  border-radius: 5%;
  margin: 0 8px;

  @media only screen and (max-width: 600px) {
    width: 60px;
    height: 30px;
    
    & svg {
      height: 16px;
      width: 16px;
    }
  }

  @media only screen and (max-height: 600px) {
    width: 60px;
    height: 30px;
    
    & svg {
      height: 16px;
      width: 16px;
    }
  }
`;

export const KeyboardLine = styled.div`
  display: flex;
  justify-content: center;
`;

export const KeyboardButton = styled.button<{ 
  wrongWord?: boolean;
  correct?: boolean;
  otherSpot?: boolean;
  isColorblindMode?: boolean;
 }>`
  width: 45px;
  height: 50px;
  margin: 4px;
  border-radius: 10%;
  background: #B1A7A6;
  color: #0B090A;
  border: none;
  font-size: 24px;
  font-weight: 900;

  ${props => props.wrongWord && css`
    background: #333333;
    color: #B1A7A6;
  `}

  ${props => props.otherSpot && css`
    background: #F7A32D;
    color: #fff;
  `}

  ${props => props.otherSpot && props.isColorblindMode && css`
    background: #fe6100;
    color: #fff;
  `}

  ${props => props.correct && css`
    background: #00A32D;
    color: #fff;
  `}

  ${props => props.correct && props.isColorblindMode && css`
    background: #648fff;
    color: #fff;
  `}

  @media only screen and (max-width: 600px) {
    width: 30px;
    height: 40px;
    font-size: 16px;
  }

  @media only screen and (max-height: 850px) {
    width: 30px;
    height: 40px;
    font-size: 16px;
  }

  @media only screen and (max-height: 600px) {
    width: 20px;
    height: 30px;
    font-size: 12px;
  }
`;
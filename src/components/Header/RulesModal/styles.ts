import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 500px;
  height: auto;
  background: #161A1D;
  border-radius: 10px;
  color: #B1A7A6;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const HeaderContainer = styled.div`
  text-align: center;
  white-space: pre;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(177, 167, 166, 0.2);

  & p {
    margin-top: 32px;
    font-weight: 600;
  }

  & h1 {
    line-height: 0;
  }
`;

export const BodyContainer = styled.div`
  color: #B1A7A6;
  
  & p {
    margin-top: 16px;
    font-weight: 600;
  }
`;

export const LetterLine = styled.div`
  display: flex;
  margin: 4px 0;
`;

export const LetterBox = styled.div<{ background?: string }>`
  width: 30px;
  height: 30px;
  color: #F5F3F4;
  border-radius: 10%;
  border: 3px solid #B1A7A6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  margin: 4px;

  ${props => props.background && css`
    border: 3px solid transparent;
  `}

  background: ${props => props.background};
`;
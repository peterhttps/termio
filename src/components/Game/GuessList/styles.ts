import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const LetterBox = styled.div`
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

  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
`;
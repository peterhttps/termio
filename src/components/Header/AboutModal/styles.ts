import styled from 'styled-components';

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

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const BodyContainer = styled.div`
  text-align: center;
  & h1 {
    font-size: 24px;
    color: #fff;
    font-weight: 900;
  }
  
  & p {
    margin-top: 0;
  }
`;

export const ContactContainer = styled.div`
  
  
  display: flex;
  justify-content: center;
  margin-top: 16px;

  & p {
    font-weight: bold;
  }

  & a {
    border: none;
    background: none;
    margin-left: 16px;
  }
`;

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

  @media only screen and (max-width: 600px) {
    width: 90%;
  }
`;

export const InspiredPhrase = styled.p`
  font-weight: bold;

  & a {
    color: #D3D3D3;
  }
`;

export const VersionLabel = styled.p`
  margin-top: 16px;
  font-size: 12px;
  float: right;
  font-weight: bold;
  color: #B1A7A6;
`;
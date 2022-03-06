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
  width: 300px;
  height: auto;
  background: #161A1D;
  border-radius: 10px;
  color: #B1A7A6;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & h1 {
    line-height: 0;
    margin-bottom: 32px;
    font-size: 24px;
    font-weight: 800;
  }

  & h3 {
    line-height: 0;
    margin-bottom: 32px;
    font-size: 18px;

    & span {
      font-weight: 800;
    }
  }

  @media only screen and (max-width: 650px) {
    width: 80%;
  }

  @media only screen and (max-height: 650px) {
     & h1 {
      font-size: 16px;
     }
  }
`;

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatsContainer = styled.div`
  text-align: center;
  margin-bottom: 24px;
`;

export const BigNumber = styled.h2`
  font-weight: 800;
  font-size: 2rem; 

  @media only screen and (max-height: 650px) {
    font-size: 1.5rem; 
  }
`;

export const NumberDescription = styled.p`
  font-weight: 600;
`;

export const GraphContainer = styled.div`
  width: 100%;
`;

export const GraphTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 8px;
  text-align: center;
  font-size: 18px;

  @media only screen and (max-height: 650px) {
    font-size: 16px;
  }
`;

export const GraphRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const GraphNumber = styled.p`
  font-weight: 800;
  margin-right: 8px;

  @media only screen and (max-height: 650px) {
    font-size: 14px;
  }
`;

export const GraphProgress = styled.div<{ width?: string, isColorblindMode?: boolean }>`
  background: ${props => props.isColorblindMode ? '#648fff' : '#00A32D'};
  width: ${props => props.width};
  border-radius: 2px;
  color: white;
  font-weight: 800;
  padding: 2px 8px;

  & p {
    float: right
  }

  @media only screen and (max-height: 650px) {
    font-size: 14px;
  }
`;

export const ShareButton = styled.button`
  margin-top: 16px;
  background: #E5383B;
  border: none;
  width: 80%;
  padding: 12px 0;
  font-size: 18px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  & svg {
    margin-right: 8px;
  }

  @media only screen and (max-height: 650px) {
    font-size: 14px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  z-index: 999;
  position: absolute; 
  left: 0; 
  right: 0; 
  bottom: 64px;
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
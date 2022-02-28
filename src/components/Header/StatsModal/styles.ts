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
  }

  @media only screen and (max-width: 600px) {
    width: 80%;
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
`;

export const NumberDescription = styled.p`
  font-weight: 600;
`;

export const GraphContainer = styled.div`

`;

export const GraphTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 8px;
`;

export const GraphRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const GraphNumber = styled.p`
  font-weight: 800;
  margin-right: 8px;
`;

export const GraphProgress = styled.div<{ width?: string }>`
  background: #00A32D;
  width: ${props => props.width};
  border-radius: 2px;
  color: white;
  font-weight: 800;
  padding: 2px 8px;

  & p {
    float: right
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
`;
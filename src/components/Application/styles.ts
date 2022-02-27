import styled from 'styled-components';

export const Wrapper = styled.div<{ height?: string }>`
  height: ${props => props.height ? props.height : '90vh'};

  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: auto;
`;
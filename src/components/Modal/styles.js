import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
from {
  opacity: 0;
  transform: translateY(-50px);
}
to {
  opacity: 1;
  transform: translateY(0);
}
`;


export const Content = styled.div`
  animation: ${appearFromLeft} 1s;
`;
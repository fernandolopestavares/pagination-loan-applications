import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type: 'success' | 'error' | 'info';
}

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-width: 600px;

  border-radius: 0.4rem;

  padding: 0.8rem 1.6rem;
  margin-right: -0.4rem;

  ${props =>
    props.type === 'success' &&
    css`
      background: #f6ffed;
      border: 0.1rem solid #52c41a;
    `}

  ${props =>
    props.type === 'info' &&
    css`
      background: #ceedfd;
      border: 0.1rem solid #0e74ea;
    `}

  ${props =>
    props.type === 'error' &&
    css`
      background: #ffe1d6;
      border: 0.1rem solid #ff3549;
    `}

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }
  }

  button {
    border: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: rgba(0, 0, 0, 0.45);
    }
  }
`;

import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-left: 3.2rem;

  button {
    width: 3.2rem;
    height: 3.2rem;
    background-color: #f2f6f6;
    border: 0.1rem solid rgba(0, 0, 0, 0.15);
    border-radius: 0.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s;

    color: #8f8f8f;
    font-weight: normal;
    font-family: 'Montserrat';

    & + button {
      margin-left: 0.4rem;
    }

    &:hover {
      border-color: #ff7600;
      color: #ff7600;
    }

    &.active {
      border-color: #ff7600;
      background-color: #ff7600;
      color: #f2f6f6;
      font-weight: bold;

      &:hover {
        background-color: ${shade(0.2, '#ff7600')};
        border-color: ${shade(0.2, '#ff7600')};
      }
    }
  }
`;

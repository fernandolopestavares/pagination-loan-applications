import styled from 'styled-components';
import { shade, transparentize } from 'polished';

export const Container = styled.div`
  padding: 2.4rem;

  h2 {
    margin-bottom: 1.6rem;
  }

  > footer {
    margin-top: 2.4rem;
    display: flex;
    justify-content: flex-end;

    button {
      background: #ff7600;
      padding: 1.2rem 2rem;
      border: 0;
      border-radius: 2px;

      color: #f2f6f6;
      font-weight: bold;

      transition: background-color 0.2s, color 0.2s;

      & + button {
        margin-left: 0.8rem;
      }

      &:hover {
        background-color: ${shade(0.2, '#ff7600')};
      }

      &.cancel {
        background: transparent;
        color: #8f8f8f;

        &:hover {
          color: ${transparentize(0.2, '#8f8f8f')};
        }
      }
    }
  }
`;

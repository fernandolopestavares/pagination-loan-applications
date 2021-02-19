import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  background: #01929f;
  padding: 1.6rem 0;
`;

export const Content = styled.div`
  width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;

  button {
    font-weight: bold;
    font-size: 1.6rem;
    border: 0;
    background: none;
    color: #f2f6f6;

    transition: color 0.2s;

    & + button {
      margin-left: 4.4rem;
    }

    &:hover {
      color: ${transparentize(0.2, '#f2f6f6')};
    }
  }
`;

export const CompanyButton = styled.button`
  border: 0;
  background: transparent;

  margin-left: 4rem;

  display: flex;
  align-items: center;

  color: #f2f6f6;
  transition: color 0.2s;

  &:hover {
    color: ${transparentize(0.2, '#f2f6f6')};
  }

  > img {
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    margin-right: 1.8rem;
  }

  > span {
    font-size: 1.6rem;
    font-weight: normal;
  }
`;

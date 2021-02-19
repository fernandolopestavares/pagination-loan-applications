import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.label`
  display: block;
  position: relative;
  cursor: pointer;

  input {
    display: none;
    cursor: pointer;
  }

  span {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border: 0.3px solid #ff7600;
    border-radius: 4px;
    transition: 0.2s;
  }

  input:checked + span {
    background: #ff7600;

    &:hover {
      background: ${shade(0.2, '#FF7600')};
    }

    &::after {
      position: absolute;
      top: 1px;
      left: 4px;
      content: '';
      width: 4px;
      height: 8px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

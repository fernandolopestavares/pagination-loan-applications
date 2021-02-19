import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Checkbox: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Container htmlFor={`${name}-checkbox`}>
      <input id={`${name}-checkbox`} type="checkbox" name={name} {...rest} />
      <span className="check" />
    </Container>
  );
};

export default Checkbox;

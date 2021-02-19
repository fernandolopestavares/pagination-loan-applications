import React from 'react';
import { Props as ReactSelectProps } from 'react-select';

import { Container, SelectComponent } from './styles';

const Select: React.FC<ReactSelectProps> = props => {
  return (
    <Container>
      <SelectComponent
        isSearchable={false}
        loadingMessage={() => 'Carregando...'}
        indicatorSeparator={false}
        {...props}
      />
    </Container>
  );
};

export default Select;

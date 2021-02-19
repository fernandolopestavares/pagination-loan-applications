import React from 'react';

import { useCompany } from '../../hooks/company';
import whiteBackground from '../../assets/background-branco.png';

import { Container, Content, Menu, CompanyButton } from './styles';

const Header: React.FC = () => {
  const company = useCompany();

  return (
    <Container>
      <Content>
        <img src="" alt="" />

        <Menu>
          <button type="button">Contratos</button>
          <button type="button">Solicitações</button>
          <button type="button">Importar Folha</button>
          <button type="button">Relatório</button>
          <CompanyButton>
            <img src={whiteBackground} alt={company.name} />
            <span>{company.name || ''}</span>
          </CompanyButton>
        </Menu>
      </Content>
    </Container>
  );
};

export default Header;

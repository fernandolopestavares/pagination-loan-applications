import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';

interface Company {
  id: string;
  cnpj: string;
  fantasyName: string;
  name: string;
  selected: boolean;
}

const CompanyContext = createContext({} as Company);

export const CompanyProvider: React.FC = ({ children }) => {
  const [company, setCompany] = useState<Company>({} as Company);

  useEffect(() => {
    async function loadCompanies() {
      const response = await api.get<Company[]>('companies');

      const selectedCompany = response.data.find(
        findCompany => findCompany.selected,
      );

      if (selectedCompany) {
        setCompany(selectedCompany);
      }
    }

    loadCompanies();
  }, []);

  return (
    <CompanyContext.Provider value={company}>
      {children}
    </CompanyContext.Provider>
  );
};

export function useCompany(): Company {
  const context = useContext(CompanyContext);

  return context;
}

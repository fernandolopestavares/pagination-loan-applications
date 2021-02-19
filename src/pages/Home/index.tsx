import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { ValueType, OptionTypeBase } from 'react-select';
import { GooSpinner } from 'react-spinners-kit';

import Header from '../../components/Header';
import Checkbox from '../../components/Checkbox';
import Select from '../../components/Select';
import Pagination from '../../components/Pagination';
import ModalRequest from '../../components/ModalRequest';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import formatCPF from '../../utils/formatCPF';
import { useToast } from '../../hooks/toast';
import { useCompany } from '../../hooks/company';

import {
  Container,
  TableContainer,
  ActionsContainer,
  ItemsPerPageContainer,
  EmptyTableContainer,
  LoadingContainer,
} from './styles';

interface ActionSelect {
  label: string;
  value: string;
}

interface User {
  id: string;
  cpf: string;
  email: string;
  name: string;
  salary: string;
  value: string;
  formattedCPF: string;
  formattedValue: string;
  formattedSalary: string;
  companyId: string;
}

const Home: React.FC = () => {
  const { addToast } = useToast();
  const company = useCompany();

  const [loading, setLoading] = useState(true);
  const [modalRequest, setModalRequest] = useState(false);

  const [action, setAction] = useState<ActionSelect | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const [itemsPerPage, setItemsPerPage] = useState<ActionSelect>({
    label: '20',
    value: '20',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedUsers, setPaginatedUsers] = useState<User[]>([]);

  const toggleModalRequest = useCallback(() => {
    setModalRequest(state => !state);
  }, []);

  const handleChangeAction = useCallback((value: ValueType<OptionTypeBase>) => {
    setAction(value as ActionSelect);
  }, []);

  const handleChangeItemsPerPage = useCallback(
    (value: ValueType<OptionTypeBase>) => {
      setItemsPerPage(value as ActionSelect);
    },
    [],
  );

  const handleSelectedUser = useCallback(
    (id: string) => {
      const findIndex = selected.findIndex(userId => userId === id);

      if (findIndex < 0) {
        setSelected([...selected, id]);
        return;
      }

      const copySelected = selected.slice();
      copySelected.splice(findIndex, 1);

      setSelected(copySelected);
    },
    [selected],
  );

  const handleSubmitRequest = useCallback(() => {
    const copyUsers = users.slice();

    selected.map(userId => {
      const findIndex = copyUsers.findIndex(user => user.id === userId);

      if (findIndex >= 0) {
        copyUsers.splice(findIndex, 1);
      }
    });

    switch (action?.value) {
      case 'accept': {
        addToast({
          type: 'success',
          message: `${selected.length} solicitações de empréstimo foram aceitas com sucesso!`,
        });

        break;
      }

      case 'reject': {
        addToast({
          type: 'error',
          message: `${selected.length} solicitações de empréstimo foram rejeitadas com sucesso!`,
        });

        break;
      }

      default:
        break;
    }

    setUsers(copyUsers);
    setSelected([]);
    setAction(null);
  }, [selected, users, action, addToast]);

  const messageButton = useMemo(() => {
    switch (action?.value) {
      case 'accept': {
        return 'Aceitar Solicitações';
      }

      case 'reject': {
        return 'Rejeitar Solicitações';
      }

      default: {
        return 'Nenhuma ação selecionada';
      }
    }
  }, [action]);

  const confirmationMessage = useMemo(() => {
    switch (action?.value) {
      case 'accept': {
        return {
          title: `Aceitar ${selected.length} solicitações`,
          message:
            'Você tem colaboradores selecionados em outras páginas. Tem certeza que deseja aceitar todas as solicitações?',
        };
      }

      case 'reject': {
        return {
          title: `Rejeitar ${selected.length} solicitações`,
          message:
            'Você tem colaboradores selecionados em outras páginas. Tem certeza que deseja rejeitar todas as solicitações?',
        };
      }

      default:
        return null;
    }
  }, [action, selected]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get<User[]>('users');

      const formattedUsers = response.data.map(user => ({
        ...user,
        formattedCPF: formatCPF(user.cpf),
        formattedSalary: formatValue(Number(user.salary)),
        formattedValue: formatValue(Number(user.value)),
      }));

      const usersFilteredByCompany = formattedUsers
        .filter(user => user.companyId === company.id)
        .sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });

      setUsers(usersFilteredByCompany);

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }

    loadUsers();
  }, [company.id]);

  useEffect(() => {
    const startPaginate =
      (Number(currentPage) - 1) * Number(itemsPerPage.value);

    const endPaginate = startPaginate + Number(itemsPerPage.value);

    setPaginatedUsers(users.slice(startPaginate, endPaginate));
  }, [users, itemsPerPage.value, currentPage]);

  return (
    <>
      <ModalRequest
        title={confirmationMessage?.title || ''}
        message={confirmationMessage?.message || ''}
        isOpen={modalRequest}
        setIsOpen={toggleModalRequest}
        handleSubmit={handleSubmitRequest}
      />
      <Header />
      <Container>
        <h1>Solicitações de Empréstimo</h1>

        {loading ? (
          <LoadingContainer>
            <GooSpinner color="#01929f" />
          </LoadingContainer>
        ) : (
          <>
            {users.length === 0 ? (
              <EmptyTableContainer>
                <h3>Você não tem nenhuma nova solicitação de empréstimo.</h3>

                <p>
                  <span>Clique aqui</span> para acompanhar a situação dos
                  empréstimos em andamento dos seus colaboradores.
                </p>
              </EmptyTableContainer>
            ) : (
              <>
                <TableContainer>
                  <table>
                    <thead>
                      <tr>
                        <th> </th>
                        <th>NOME</th>
                        <th>CPF</th>
                        <th>SALÁRIO DISPONÍVEL (R$)</th>
                        <th>VALOR FINANCIADO (R$)</th>
                        <th>%</th>
                        <th>PARCELAS</th>
                      </tr>
                    </thead>

                    <tbody>
                      {paginatedUsers.map(user => (
                        <tr key={user.id}>
                          <td>
                            <Checkbox
                              name={user.id}
                              checked={selected.includes(user.id)}
                              onChange={() => handleSelectedUser(user.id)}
                            />
                          </td>
                          <td>{user.name}</td>
                          <td>{user.formattedCPF}</td>
                          <td>{user.formattedSalary}</td>
                          <td>{user.formattedValue}</td>
                          <td>0</td>
                          <td>0</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <ActionsContainer>
                    <div>
                      <Select
                        name="action"
                        placeholder="Escolha uma ação..."
                        options={[
                          { label: 'Aceitar Solicitação', value: 'accept' },
                          { label: 'Rejeitar Solicitação', value: 'reject' },
                        ]}
                        onChange={handleChangeAction}
                      />

                      <button
                        type="button"
                        disabled={!action || selected.length === 0}
                        onClick={toggleModalRequest}
                      >
                        {messageButton}
                      </button>
                    </div>
                  </ActionsContainer>
                </TableContainer>

                <footer>
                  <ItemsPerPageContainer>
                    <Select
                      placeholder=""
                      options={[
                        { label: '20', value: '20' },
                        { label: '30', value: '30' },
                        { label: '50', value: '50' },
                      ]}
                      value={itemsPerPage}
                      onChange={handleChangeItemsPerPage}
                    />
                    <span>por página</span>
                  </ItemsPerPageContainer>

                  <Pagination
                    onChangeCurrentPage={pageNumber => {
                      setCurrentPage(pageNumber);
                    }}
                    perPage={Number(itemsPerPage.value)}
                    totalItems={users.length}
                  />
                </footer>
              </>
            )}
          </>
        )}
      </Container>
    </>
  );
};

export default Home;

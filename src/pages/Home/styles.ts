import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;
  padding: 5.6rem 0;

  h1 {
    font-size: 3.6rem;
    font-weight: bold;
  }

  > footer {
    margin-top: 2.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TableContainer = styled.div`
  margin-top: 3.3rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.8rem;

  table {
    width: 100%;
    border-spacing: 0px 5px;
    border-collapse: collapse;

    th {
      text-align: left;
      padding: 2.2rem 2.4rem;
      background: rgba(128, 200, 207, 0.20348);

      &:first-child {
        border-radius: 8px 0 0 0;
      }

      &:last-child {
        border-radius: 0 8px 0 0;
      }
    }

    tbody {
      cursor: default;

      tr {
        transition: background-color 0.4s;

        &:nth-child(even) {
          background: rgba(0, 0, 0, 0.03);
        }

        &:hover {
          background: #f0f0f0;
        }
      }
    }

    td {
      padding: 1rem 2.4rem;
    }
  }
`;

export const ActionsContainer = styled.footer`
  margin: 1.6rem 0 1.2rem;
  width: 100%;
  display: flex;
  justify-content: flex-end;

  > div {
    width: 45%;
    display: flex;

    button {
      margin: 0rem 1.2rem;
      border: 0;
      background: #ff7600;
      border-radius: 0.2rem;

      font-weight: bold;
      font-size: 1.3rem;
      color: #ffffff;
      padding: 0 1.6rem;

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#ff7600')};
      }

      &:disabled {
        background: #dadada;
        cursor: not-allowed;
      }
    }
  }
`;

export const ItemsPerPageContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;

  > span {
    margin-left: 4px;
  }
`;

export const EmptyTableContainer = styled.div`
  margin-top: 3.3rem;
  border: 1px solid #f0f0f0;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 7.2rem 0;

  h3 {
    margin-bottom: 2.4rem;
    font-size: 2.4rem;
    font-weight: normal;
  }

  p {
    width: 450px;
    text-align: center;

    span {
      font-weight: bold;
      color: #01929f;
      cursor: pointer;

      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#01929f')};
      }
    }
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40rem;
`;

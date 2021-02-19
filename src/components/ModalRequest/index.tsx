import React, { useCallback } from 'react';

import Modal from '../Modal';

import { Container } from './styles';

interface ModalProps {
  title: string;
  message: string;
  isOpen: boolean;
  setIsOpen: () => void;
  handleSubmit: () => void;
}

const ModalRequest: React.FC<ModalProps> = ({
  title,
  message,
  isOpen,
  setIsOpen,
  handleSubmit,
}) => {
  const handleClickConfirmButton = useCallback(() => {
    handleSubmit();

    setIsOpen();
  }, [handleSubmit, setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} width={550}>
      <Container>
        <h2>{title}</h2>
        <p>{message}</p>

        <footer>
          <button type="button" className="cancel" onClick={setIsOpen}>
            Cancelar
          </button>

          <button type="button" onClick={handleClickConfirmButton}>
            Confirmar
          </button>
        </footer>
      </Container>
    </Modal>
  );
};

export default ModalRequest;

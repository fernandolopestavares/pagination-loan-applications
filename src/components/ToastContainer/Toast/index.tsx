import React, { useEffect } from 'react';
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
  AiOutlineClose,
} from 'react-icons/ai';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

const icons = {
  info: <AiFillExclamationCircle color="#0E74EA" size={16} />,
  success: <AiFillCheckCircle color="#52C41A" size={16} />,
  error: <AiFillCloseCircle color="#FF3549" size={16} />,
};

interface ToastProps {
  toast: ToastMessage;
  style: object;
}

const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    return () => clearTimeout(timer);
  }, [removeToast, toast.id]);

  return (
    <Container type={toast.type} style={style}>
      <div>
        {icons[toast.type || 'info']}

        <p>{toast.message}</p>
      </div>

      <button type="button" onClick={() => removeToast(toast.id)}>
        <AiOutlineClose size={16} />
      </button>
    </Container>
  );
};

export default Toast;

import React from 'react';
import { useTransition } from 'react-spring';

import { ToastMessage } from '../../hooks/toast';

import { Container } from './styles';
import Toast from './Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { transform: 'translateX(120%)' },
      enter: { transform: 'translateX(0)' },
      leave: { transform: 'translateX(120%)' },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;

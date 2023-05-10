import React from 'react';
import styled from 'styled-components';

const Modal = ({ children }) => {
  return <ModalBackground>{children}</ModalBackground>;
};

export default Modal;

const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #141414;
  /* text-align: center; */
`;

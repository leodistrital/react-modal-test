import React, { useState } from "react";
import {
  ModalProvider,
  Modal,
  useModal,
  ModalTransition,
} from 'react-simple-hook-modal';
import 'react-simple-hook-modal/dist/styles.css';


function App() {
  
  
  const MyComponent = () => {
    
    const { isModalOpen, openModal, closeModal } = useModal();
    return (
    <>
      <button onClick={openModal}>Open</button>
      <Modal
        id="any-unique-identifier"
        isOpen={isModalOpen}
        transition={ModalTransition.BOTTOM_UP}
      >
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};



	return (
	<ModalProvider>
    <MyComponent />
  </ModalProvider>
	);
}

export default App;

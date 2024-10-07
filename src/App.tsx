import { ButtonType } from './types.d';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const openAlert = () => {
    setShowAlert(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  const controls = [
    {
      type: ButtonType.Primary,
      label: 'Show alert',
      onClick: () => {
        alert('You pressed primary button');
      },
    },
    {
      type: ButtonType.Danger,
      label: 'Close',
      onClick: closeModal,
    },
  ];

  return (
    <>
      <button type='button' className='btn btn-primary' onClick={openModal}>
        Launch demo modal
      </button>
      <button type='button' className='btn btn-primary' onClick={openAlert}>
        Launch demo alert
      </button>
      <Modal show={showModal} title='Hello, World!' onClose={closeModal} controls={controls}>
        hahaha
      </Modal>
      <Alert show={showAlert} onClose={closeAlert}>
        hohoho
      </Alert>
    </>
  );
}

export default App;

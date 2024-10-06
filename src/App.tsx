import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          setShowModal(true);
        }}
      >
        Launch demo modal
      </button>
      <button
        type='button'
        className='btn btn-primary'
        onClick={() => {
          setShowAlert(true);
        }}
      >
        Launch demo alert
      </button>
      <Modal
        show={showModal}
        title='Hello, World!'
        onClose={() => {
          setShowModal((show) => !show);
        }}
      >
        hahaha
      </Modal>
      <Alert
        show={showAlert}
        onClose={() => {
          setShowAlert((show) => !show);
        }}
      >
        hohoho
      </Alert>
    </>
  );
}

export default App;

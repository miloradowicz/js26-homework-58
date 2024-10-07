import { AlertDescription, AlertType, ButtonType } from './types.d';
import { useState } from 'react';
import Modal from './components/Modal/Modal';
import Alert from './components/Alert/Alert';
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [alerts, setAlerts] = useState<AlertDescription[]>([]);

  const openModal = () => {
    setShowModal(true);
  };

  const openAlert = () => {
    setAlerts((alerts) => {
      const id = Date.now();

      return [...alerts, { id: id, type: AlertType.Danger, clickDismissable: true, onDismiss: () => closeAlert(id), content: 'hohoho' }];
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAlert = (id: number) => {
    setAlerts((alerts) => alerts.filter((x) => x.id !== id));
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
      <div className='row g-3'>
        <button type='button' className='btn btn-primary' onClick={openModal}>
          Launch demo modal
        </button>
        <button type='button' className='btn btn-primary' onClick={openAlert}>
          Add demo alert
        </button>
        <div className='d-flex flex-column gap-1' id='alert-box'>
          {' '}
          {alerts.map((x) => (
            <Alert type={x.type} onDismiss={x.onDismiss} clickDismissable={x.clickDismissable}>
              {x.content}
            </Alert>
          ))}
        </div>
      </div>
      <Modal show={showModal} title='Hello, World!' onClose={closeModal} controls={controls}>
        hahaha
      </Modal>
    </>
  );
}

export default App;

import React from 'react'
import Modal from 'react-modal';

const Modalmessage = ({ isOpen, message }) => {
    const customModalStyles = {
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
      },
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border: 'none',
        padding: '20px',
        textAlign: 'center',
      },
    };
  
    return (
      <div>
        <Modal isOpen={isOpen} style={customModalStyles}>
          <p className=' border-sky-600 py-3 px-4 text-sky-500'>{message}</p>
        </Modal>
      </div>
    );
  };
  
  export default Modalmessage;
  

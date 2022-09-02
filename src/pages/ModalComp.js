import React, { useState } from 'react'
import Modal from 'react-modal';

Modal.setAppElement("#root")

function ModalComp() {

  const customStyles = {
    content: {
      top: '35%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setModalIsOpen]=useState(false)

  return (
    <div className='container'>
        <h2 className='underline'>react-modal</h2>
            <button className='btn' onClick={()=>setModalIsOpen(true)}>Show Modal!</button>
        <div>
          <Modal 
            isOpen={modalIsOpen} 
            style={customStyles} 
            shouldCloseOnOverlayClick={true} 
            onRequestClose={()=>setModalIsOpen(false)} //Esto es para permitir cierre al hacer click afuera o press "esc"
          >
            <h2>Modal title</h2>
            <p>Model content bla bla bla bla blblblbla blsb albla</p>
            <p>Model content bla bla bla bla blblblbla blsb albla</p>
            <p>Model content bla bla bla bla blblblbla blsb albla</p>
            <p>Model content bla bla bla bla blblblbla blsb albla</p>
            <button className='btn' onClick={()=>setModalIsOpen(false)}>Close Modal</button>
          </Modal>
        </div>
    </div>
  )
}

export default ModalComp
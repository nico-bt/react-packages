import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toastify() {

    const content = (<div style={{textAlign:"center", fontSize:"1.2rem"}}>
            <p>Basic Notification Here</p> 
            <p>Notification: bla bla lorem ipsum doberman terrier jack collie caniche bulldog perroCalle scooby</p> 
            <p>🦄 Wow so easy!</p>
        </div>)
    
    const notify = () => toast(content, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    const success = () => toast.success("Succes type",{position: "top-left"})
    
    const info = () => toast.info("Info type")

    const warning = () => toast.warning("WARNING type")

    const error = () => toast.error("ERROR type", {position: "top-center"})

  return (
    <div className='container'>
      <h2 className='underline'>react-toastify</h2>
        <button className='btn' onClick={notify}>Notify!</button>
        <button className='btn' onClick={success}>Success!</button>
        <button className='btn' onClick={info}>Info!</button>
        <button className='btn' onClick={warning}>Warning!</button>
        <button className='btn' onClick={error}>Error!</button>
        <ToastContainer />

        
    </div>
  )
}

export default Toastify
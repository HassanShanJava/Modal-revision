import React,{useState} from "react";
import Modal from "./component/Modal";


function App() {
  const [openModal, setOpenModal]=useState(false)

  return (
    <div>
      <button className="modalButton" onClick={()=>setOpenModal(true)} >Modal</button>
      <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
    </div>
  );
}

export default App;

import { useState } from "react"
import Modal from "./modal";
import "./modal.css";

export default function ModalTest(){
    const [showModalPopup,setShowModalPopup]=useState(false);

    function handleToggleModalPopup(){
        setShowModalPopup(!showModalPopup);
    }
    function onClose(){
        setShowModalPopup(false);
    }
    function handleKeyDown(event){
        if(event.key==="Escape"){
            onClose();
        }
    }

    return <div tabIndex="-1" onKeyDown={(e)=>handleKeyDown(e)}>
        <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
        {
            showModalPopup&&<Modal onClose={onClose} body={<div>Customized Body</div>} header={<h2>Customized Header</h2>} footer={<h2>Customized Footer</h2>}/>
        }
    </div>
}
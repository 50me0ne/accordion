import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){
    const [qrCode,setQrCode]=useState("");
    const [input,setInput]=useState("");

    function handleGenerateQrCode(){
        setQrCode(input);
        setInput("");
    }
    function handleKeyDown(event){
        if(input&&input.trim()!==""&&event.key==="Enter"){
            handleGenerateQrCode();
        }
    }

    return <div>
        <h1>QR Code Generator</h1>
        <div>
            <input onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>handleKeyDown(e)} type="text" name="qr-code" value={input} placeholder="Enter you value here" />
            <button disabled={input&&input.trim()!==""?false:true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff"/>
        </div>
    </div>
}
import { useEffect } from "react";
import { useState } from "react"

export default function RandomColor(){
    const [typeOfColor,setTypeOfColor]=useState('hex');
    const [color,setColor]=useState('#000000');
    const [autoChange,setAutoChange]=useState(true);
    const [saveRGB,setSaveRGB]=useState("");
    const [saveHEX,setSaveHEX]=useState("");

    function randomColorUtility(length){
        return Math.floor(Math.random()*length);
    }

    function HandleClearRandomHexColor(){
        if(autoChange){
            const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
            let hexColor="#";
            for(let i=0;i<6;i++){
                hexColor+=hex[randomColorUtility(hex.length)];
            }
            const hColor=hexColor;
            setColor(hColor);
        }else{
            setColor(saveHEX);
        }
    }
    function HandleClearRandomRgbColor(){
        if(autoChange){
            const r=randomColorUtility(256);
            const g=randomColorUtility(256);
            const b=randomColorUtility(256);
            setColor(`rgb(${r},${g},${b})`);
        }else{
            setColor(saveRGB);
        }
    }

    function HandleClearRandomColor(){
        if(typeOfColor==="rgb"){
            const r=randomColorUtility(256);
            const g=randomColorUtility(256);
            const b=randomColorUtility(256);
            setColor(`rgb(${r},${g},${b})`);
            if(!autoChange){
                setSaveRGB(`rgb(${r},${g},${b})`);
                setSaveHEX("#"+HexConversion(r)+HexConversion(g)+HexConversion(b));
            }
        }else{
            const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","F"];
            let hexColor="#";
            for(let i=0;i<6;i++){
                hexColor+=hex[randomColorUtility(hex.length)];
            }
            const hColor=hexColor;
            setColor(hColor.toString());
            if(!autoChange){
                setSaveHEX(hColor);
                setSaveRGB(`rgb(${RGBConversion(hColor.substring(1,3))},${RGBConversion(hColor.substring(3,5))},${RGBConversion(hColor.substring(5))})`);
            }
        }
    }
    
    function HexConversion(c){
        let x,y;

        x=Math.floor(c/16).toString();
        y=(c%16).toString();
        
        return HexLetters(x)+HexLetters(y);
    }

    function HexLetters(c){
        switch (c) {
            case "10":
                return 'A';
            case "11":
                return 'B';
            case "12":
                return 'C';
            case "13":
                return 'D';
            case "14":
                return 'E';
            case "15":
                return 'F';
            default:
                return c;
        }
    }

    function RGBConversion(c){
        let x,y;
        x=16*RGBLetter(c[0].toString());
        y=RGBLetter(c[1].toString());
        return x+y;
    }
    
    function RGBLetter(c){
        switch(c){
            case "A":
            case "a":
                return 10;
            case "B":
            case "b":
                return 11;
            case "C":
            case "c":
                return 12;
            case "D":
            case "d":
                return 13;
            case "E":
            case "e":
                return 14;
            case "F":
            case "f":
                return 15;
            default:
                return parseInt(c);
        }
    }

    function AutoChange(change){
        setAutoChange(change)
        if(autoChange){
            if(typeOfColor==="rgb"){
                let rgbS=color.slice(4).replace(")","").split(",");
                setSaveRGB(color);
                setSaveHEX("#"+HexConversion(rgbS[0])+HexConversion(rgbS[1])+HexConversion(rgbS[2]));
            }else{
                setSaveHEX(color);
                setSaveRGB(`rgb(${RGBConversion(color.substring(1,3))},${RGBConversion(color.substring(3,5))},${RGBConversion(color.substring(5))})`);
            }
        }else{
            setSaveRGB("");
            setSaveHEX("");
        }
    }

    useEffect(()=>{
        if(typeOfColor==="rgb"){
            HandleClearRandomRgbColor();
        }else{
            HandleClearRandomHexColor();
        }
    },[typeOfColor]);

    return <div style={{
        width:"100vw",
        height:"100vh",
        background:color
    }}>
        <button onClick={()=>setTypeOfColor('hex')}>Create HEX Color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RGB Color</button>
        <button onClick={HandleClearRandomColor}>Generate Random Color</button>
        <button onClick={()=>AutoChange(!autoChange)}>{autoChange? "Deactivate Autochange" : "Activate Autochange"}</button>
        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#ffffff",
            fontSize:"60px",
            marginTop:"50px",
            flexDirection:"column",
            gap:"20px"
        }}>
            <h3>{typeOfColor==='rgb'?"RGB Color":"HEX Color"}</h3>
            <h1>{color}</h1>
        </div>
    </div>
}
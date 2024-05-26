import { useState,useEffect } from "react";
import "./TextModifier.css";

export default function TextModifier() {
    const [text,setText]=useState("");

    function onHandleChange(event){
        const inputValue=event.target.value;
        setText(inputValue)
    }
    function toConvertUppercase(){
        const data=text.toUpperCase();
        setText(data);
    }
    function toConvertLowercase(){
        const data=text.toLowerCase();
        setText(data);
    }
    function toClearText(){
        setText('');
    }
    function toCopyText(){
        navigator.clipboard.writeText(text).then(()=>{
            alert("Text copied to clipboard")
        }).catch((err)=>{
            console.error("Failed to copy text: ",err)
        })
    }
    function toRemoveExtraSpaces() {
        const data = text.replace(/\s+/g, ' ').trim();
        setText(data);
      }
     useEffect(()=>{
        console.log("Use effect rendered")
    })
    
    // function useEffect(){
    //     console.log("use")
    // }
  return (
    <div>
      <nav className="nav">
        <h6 className="navele" id="textUtils">
          TextUtils
        </h6>
        <h6 className="navele" id="home">
          Home
        </h6>
      </nav>
      <h1 className="text">Enter the Text to analyze below</h1>
      <input type="text" value={text} onChange={onHandleChange}></input>
      <button onClick={toConvertUppercase}>Convert to Uppercase</button>
      <button onClick={toConvertLowercase}>Convert to Lowercase</button>
      <button onClick={toClearText}>Clear Text</button>
      <button onClick={toCopyText}>Copy Text</button>
      <button onClick={toRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
  );
}



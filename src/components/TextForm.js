import React, { useState } from "react";


export default function TextForm(props) {

 
  const handleUpClick = () => {
    // console.log("uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UPPERCASE","success");
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To lowercase","success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Textarea is cleared","success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed","success");
  };

  const handleEmailExtractor = () => {
    // console.log("changed");
    let reg = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    let text1 = document.getElementById("mybox");

    let newText = text1.value;
    let result,finalResult;
    result = newText.match(reg);
    finalResult=reg.test(result);
    if(finalResult===true)
    setText(result.toString());
    else
    setText('');
    props.showAlert("Emails Extracted","success");
  };
  const handlecopy = () => {
    // console.log("changed");
    let text1 = document.getElementById("mybox");

    navigator.clipboard.writeText(text1.value);
    props.showAlert("Text Copied","success");
  };
  const handleonchange = (event) => {
    // console.log("changed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  
  
  return (
    <>
      <div>
        <h1
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          {props.heading}
        </h1>
        <div
          className="mb-3"
          style={{
            color: props.mode === "light" ? "black" : "white",
          }}
        >
          <label htmlFor="mybox" className="form-label">
            Give Your Text
          </label>
          <textarea
            className={`form-control ${props.mode}`}
            placeholder="enter the text"
            
            value={text}
            id="mybox"
            rows="8"
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#9197a3",
              color: props.mode === "light" ? "black" : "white",
              
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlelowClick}>
          convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>
          clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlecopy}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2  my-2" onClick={handleEmailExtractor}>
          Email Extrator
        </button>
      </div>
      <div
        className="container my-2"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{
            return element.length!==0
          }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute to read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}

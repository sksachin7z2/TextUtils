import React, { useState } from "react";

export default function TextForm(props) {

      
    
 
  

  const handleUpClick = () => {
    // console.log("uppercase");
    let newText = text.toUpperCase();

    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
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
  };
  const handlecopy = () => {
    // console.log("changed");
    let text1 = document.getElementById("mybox");

    navigator.clipboard.writeText(text1.value);
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
            className="form-control"
            placeholder="enter the text"
            
            value={text}
            id="mybox"
            rows="8"
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "light" ? "black" : "white",
              
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
        <button className="btn btn-primary mx-2" onClick={handleEmailExtractor}>
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
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute to read</p>
        <h2>preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

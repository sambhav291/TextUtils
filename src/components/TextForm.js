import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("upper case was clicked");
        //setText((prev)=>{return prev=Text.toUpperCase()});  or u can use below method
        let newtext = Text.toUpperCase();
        setText(newtext);
    }
    const handleLowClick=()=>{
        console.log("lower case was clicked");
        let newtext = Text.toLowerCase();
        setText(newtext);
    }
    const handleOnChange=(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const handleCopy=()=>{
         let Text=document.getElementById('mybox');
         Text.select();
        navigator.clipboard.writeText(Text.value);
        props.showalert("Copied to Clipboard","success");
    }
    const handleExtraSpace=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClear=()=>{
        document.getElementById('mybox').value="";
    }
    const[Text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'#ceddec':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3"> 
          <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#586978':'white', color:props.mode==='dark'?'#ceddec':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'#ceddec':'black'}}>
        <h2>Your text summary </h2>
        <p>{Text.split(' ').length} words and {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} minutes read</p> 
        <h2>Preveiw</h2>
        <p>{Text.length>0?Text:"Enter your text to preveiw it here"}</p>
    </div>
    </>
  )
}


import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("")
    const upCase = () => {
        console.log("Will be changed to UpperCase" + text)
        let newText = text.toLocaleUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase","success")
    }
    const loCase = () => {
        console.log("Will be changed to LowerCase" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase","success")
    }
    const upCasechange = (event) => {
        console.log("On Change")
        setText(event.target.value);
    }
    const speakText = () =>{
        function speak() {
            const utterance = new SpeechSynthesisUtterance();
            utterance.text = text;
            speechSynthesis.speak(utterance);
            }
            props.showAlert("Speaking is Started", "success")
         speak(text)
        };

        const stopSpeak = () => {
            window.speechSynthesis.cancel();
          };

        //  const  style = {
        //       color: 'white',
        //       backgroundColor: 'black'
        //   }
 
    return (
        <>
            <div className='container' style={{color: props.mode==='dark'?'white':'black' || props.mode === 'green'?'black':'black' || props.mode === 'white'?'black':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">TextUtils -The Ultimate Text Manager</label>
                    <textarea className="form-control" value={text} id="myBox" onChange={upCasechange} rows="7" style={{backgroundColor: props.mode==='dark'?'grey':'white',
                color: props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button  disabled={text.length===0}  className='btn btn-primary mx-2  my-2' style={{backgroundColor: props.mode==='dark'?'black':'white' || props.mode==='green'?'green':'white' || props.mode==='white'?'black':'white',
               color: 'white'}} onClick={upCase}>Convert To UpperCase</button>
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={loCase} style={{backgroundColor: props.mode==='dark'?'black':'white' || props.mode==='green'?'green':'white' || props.mode==='white'?'black':'white',
               color: 'white'}}>Convert To LowerCase</button>
                <button  disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={speakText}style={{backgroundColor: props.mode==='dark'?'black':'white' || props.mode==='green'?'green':'white' || props.mode==='white'?'black':'white',
               color: 'white'}}>Speak Text</button>
                <button disabled={text.length===0}  className='btn btn-primary mx-2 my-2' onClick={stopSpeak}style={{backgroundColor: props.mode==='dark'?'black':'white' || props.mode==='green'?'green':'white' || props.mode==='white'?'black':'white',
               color: 'white'}}>Stop Speaking</button>
            </div>
            <div className='container my-2'style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
                <p>{0.008* text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
                <h2>Text Preview</h2>
                <p>{text.length>0?text:"Enter Your Text To Preview"}</p>
            </div>
        </>
    )
};
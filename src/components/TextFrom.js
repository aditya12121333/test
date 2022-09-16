import React, { useState } from 'react'
import { useSpeechSynthesis } from 'react-speech-kit'

export default function TextFrom(props) {
    // const [text, setText] = useState('Enter The Text Here')//leaening purpose
    const {speak} = useSpeechSynthesis()
    const [text, setText] = useState('')


    const HandleUpClick = () => {
        // console.log("Upper Case Was Clicked " + text);
        let Newtext = text.toUpperCase()

        setText(Newtext)
    }
    const HandlelowClick = () => {
        // console.log("Upper Case Was Clicked " + text);
        let Newtext = text.toLowerCase()

        setText(Newtext)
    }

    function mytext(){
        speak({text:text})
    }
   
    const  HandleClearClick = () => {
        let Newtext = " "

        setText(Newtext)
    }

    // const  HandlelletClick = () => {
    //     let Newtext = " "

    //     setText(Newtext)
    // }

    
    const HandleOnechnage = (event) => {
        // console.log("One Change was Clicked ");
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("TextBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    // setText('Aditta')
    return (
        <>
            <div className="container" style={{color: props.mode === "dark" ? "white" : "#042743"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={HandleOnechnage} style={{backgroundColor:props.mode === "dark" ? "grey" : "white"
                    ,color: props.mode === "dark" ? "white" : "#042743"}} id="TextBox" rows="8"></textarea>
                    <button className="btn btn-primary my-2 mx-2" onClick={HandleUpClick}>Convert TO UpperCase</button>
                    <button className="btn btn-primary my-2" onClick={HandlelowClick}>Convert TO LowerCase</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={HandleClearClick}>Clear</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
                    <button className="btn btn-primary my-2 mx-2"
                     onClick={mytext}>Speak</button>
                </div>
            </div>
         <div className='container my-1'  style={{color: props.mode === "dark" ? "white" : "#042743"}}>

                <h2>your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length}Charaters</p>
                <p>{0.008 * text.split(" ").length}Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something in the TextBox Above To Preview here"}</p>
         </div>
        </>
    )
}

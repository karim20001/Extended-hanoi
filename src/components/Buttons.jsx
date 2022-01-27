import { Continue, manual, setEnd, setFaster, setReset, setSlower, setStop, start } from '../animations/ProccessAnimation'
import './Buttons.css'

function StartBotton(){
    return (
        <button className="button" id="start" onClick={start} style={{left: "85%", top: "40%"}}>Start</button>
    )
}

function EndtBotton(){
    return (
        <button className="button" id="end" onClick={setEnd} style={{left: "85%", top: "60%"}}>End</button>
    )
}

function ResetBotton(){
    return (
        <button className="button" id="reset" onClick={setReset} style={{left: "93%", top: "60%"}}>Reset</button>
    )
}

function StopBotton(){
    return (
        <button className="button" id="stop" onClick={setStop} style={{left: "93%", top: "50%"}}>Stop</button>
    )
}

function ContinueBotton(){
    return (
        <button className="button" id="continue" onClick={Continue} style={{left: "85%", top: "50%"}}>Continue</button>
    )
}

function ManualtBotton(){
    return (
        <button className="button" id="manual" onClick={manual} style={{left: "93%", top: "40%"}}>Manual</button>
    )
}

function FasterButton(){

    return(
        <button className="button" id="manual" onClick={setFaster} style={{left: "85%", top: "70%", backgroundColor: "darkred"}}>Faster</button>
    )
}

function SlowerButton(){
    return(
        <button className="button" id="manual" onClick={setSlower} style={{left: "93%", top: "70%", backgroundColor: 'green'}}>Slower</button>
    )
}

export{
    StartBotton,
    ManualtBotton,
    ContinueBotton,
    StopBotton,
    EndtBotton,
    ResetBotton,
    SlowerButton,
    FasterButton,
}
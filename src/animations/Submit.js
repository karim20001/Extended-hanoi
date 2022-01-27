import React from 'react';
import styled, {keyframes} from 'styled-components';
import ClickSubmit from '..';
import getUserInput from '../components/Disks'


export default function SubmitAni(){
    return <Wrapper style={{color: 'blueviolet', position: 'absolute', fontSize: "15px", left: '47%', top: '65%'}}><button id="submit" type="button" onClick={submitHandeler} style= {{backgroundColor: "olive", color: "white", height: "23px", width: "100px",borderColor: "black"}}>Submit</button></Wrapper>
    
}

const animation = keyframes`

    0%{opacity: 0;}
    100%{opacity: 1;}

`;

const Wrapper = styled.span`

    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;

`;

var userInput;

function submitHandeler(e){
    e.preventDefault();

    userInput = document.getElementById("Input").value;
    userInput = parseInt(userInput);
    if (userInput < 10){
        document.getElementById("base").style.display = "none";
        document.getElementById("root").style.backgroundImage = "none";
        getUserInput(userInput);
        ClickSubmit();
    }
    
}

export {userInput}

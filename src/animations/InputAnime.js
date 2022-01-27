import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function InputAni(){
    return <Wrapper style={{color: 'blueviolet', position: 'absolute', fontSize: "40px", left: '47%', top: '50%'}}><input id="Input" style = {{backgroundColor: "black", width: "100px", height: "23px", color: "gold", border: "none"}}></input></Wrapper>
    
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
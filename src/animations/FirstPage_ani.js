import React from 'react';
import styled, {keyframes} from 'styled-components';
import { Wave } from 'react-animated-text';

export default function AnimatedText(){
    return <Wrapper style={{color: 'blueviolet', position: 'absolute', fontSize: "50px", textAlign: "center", top: '15%', left: '45%'}}><i><Wave text="ExHanoi" speed="10" /></i></Wrapper>
    
}

const animation = keyframes`

    0%{opacity: 0;  transform: translateY(-300px)}
    100%{opacity: 1; transform: translateY(0px)}

`;

const Wrapper = styled.span`
    display: inline-block;

    animation-name: ${animation};
    animation-duration: 3s;
    animation-fill-mode: forwards;

`;
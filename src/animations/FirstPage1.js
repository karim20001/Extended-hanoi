
import React from 'react';
import styled, {keyframes} from 'styled-components';

export default function Text2(){

    return <Wrapper style={{color: 'white', position: 'absolute', fontSize: "27px", left: '39%', top: '37%'}}><i>Enter number of disks columns</i></Wrapper>
}

const animation = keyframes`
    0%{opacity: 0}
    100%{opacity: 1}
`;

const Wrapper = styled.span`
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mods: forwards;
`;
import React from 'react'
import styled, { keyframes } from 'styled-components'

const Div = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px;
    display: flex;
    background-color: rebeccapurple;
    color: white;
    align-items: center;
    justify-content: center;
`

const fadeout = keyframes`
    from { 
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
    background: pink;
    opacity: 0;
    animation: ${fadeout} 1s linear;
`

const Shell = ({ballBeneath, handleSelection, index, ...props}) => (
    <Div {...props} onClick={handleSelection(index)}>
        {ballBeneath === index && <Circle />}
    </Div>
)

export default Shell
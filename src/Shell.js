import React from 'react'
import styled from 'styled-components'

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

export const Circle = styled.div`
    width: 50px;
    height: 50px;
    display: block;
    border-radius: 50%;
    background: pink;
    opacity: 0.8;
    transition: opacity .25s ease-in-out;
`

const Shell = ({ballBeneath, handleSelection, index, ...props}) => (
    <Div {...props} onClick={handleSelection(index)}>
        Shelly
        {ballBeneath === index && <Circle />}
    </Div>
)

export default Shell
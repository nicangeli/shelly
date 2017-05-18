import React from 'react'
import styled from 'styled-components'
// Flat Surface 
// Shell

const FlatSurface = styled.div`
    display: flex;
    width: 100%;
`

const Shell = styled.div`
    width: 100px;
    height: 100px;
    margin: 10px;
    background-color: ${props => props.color}
    display: flex;
    align-items: center;
    justify-content: center;
`

const GamePlay = ({handleSelection}) => (
    <FlatSurface>
        <Shell
            color='crimson'
            onClick={handleSelection(0)}>
            Card 1
        </Shell>
        <Shell
            color='teal'
            onClick={handleSelection(1)}>
            Card 2
        </Shell>
        <Shell
            color='rebeccapurple'
            onClick={handleSelection(2)}>
            Card 3
        </Shell>
    </FlatSurface>
)

export default GamePlay
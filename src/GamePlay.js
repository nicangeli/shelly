import React from 'react'

const GamePlay = ({handleSelection}) => (
    <div>
        <div onClick={handleSelection(0)}>Card 1</div>
        <div onClick={handleSelection(1)}>Card 2</div>
        <div onClick={handleSelection(2)}>Card 3</div>
    </div>
)

export default GamePlay
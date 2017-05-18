import React from 'react'

const GameFinished = ({reset, won}) => (
    <div>
        Game Over! You {won ? 'Won' : 'Lost'}
        <button onClick={reset}>Reset</button>
    </div>
)

export default GameFinished
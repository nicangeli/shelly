import React from 'react'
import GameFinished from './GameFinished'
import GamePlay from './GamePlay'

const Game = ({
    finished,
    won,
    ballBeneath,
    handleSelection,
    reset
}) => (
    <div>
        {
            finished ?
            <GameFinished
                reset={reset}
                won={won} /> :
            <GamePlay
                ballBeneath={ballBeneath}
                handleSelection={handleSelection} />
        }
    </div>
)

export default Game
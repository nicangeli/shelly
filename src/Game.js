import React from 'react'
import GameFinished from './GameFinished'
import GamePlay from './GamePlay'

const Game = ({
    finished,
    won,
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
                handleSelection={handleSelection} />
        }
    </div>
)

export default Game
import React from 'react'
import Shuffler from './Shuffler'
import Shell from './Shell'

const GamePlay = ({ballBeneath, handleSelection}) => (
        <Shuffler>
            <Shell
                index={0}
                ballBeneath={ballBeneath}
                handleSelection={handleSelection} />
            <Shell
                index={1}
                ballBeneath={ballBeneath}
                handleSelection={handleSelection} />
            <Shell
                index={2}
                ballBeneath={ballBeneath}
                handleSelection={handleSelection} />
        </Shuffler>
)

export default GamePlay
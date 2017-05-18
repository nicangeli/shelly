import React from 'react'
import { shallow } from 'enzyme'
import Game from './Game'
import GameFinished from './GameFinished'
import GamePlay from './GamePlay'

it('should render the GameFinished screen when finished', () => {
    const wrapper = shallow(<Game finished={true} />)
    expect(wrapper.find(GameFinished).length).toEqual(1)
})

it('should render the GamePlay screen when not finished', () => {
    const wrapper = shallow(<Game finished={false} />)
    expect(wrapper.find(GamePlay).length).toEqual(1)
})
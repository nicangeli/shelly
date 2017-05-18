import React from 'react'
import { shallow } from 'enzyme'
import GameFinished from './GameFinished'

it('should call reset prop when button clicked', () => {
    const reset = jest.fn()
    const wrapper = shallow(<GameFinished reset={reset} />)
    wrapper.find('button').simulate('click')
    expect(reset).toHaveBeenCalled()
})

it('should render You Won if won prop passed', () => {
    const wrapper = shallow(<GameFinished won={true} />)
    expect(wrapper.text()).toContain('You Won')
})

it('should render You Lost if won is false', () => {
    const wrapper = shallow(<GameFinished won={false}/>)
    expect(wrapper.text()).toContain('You Lost')
})
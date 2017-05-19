import React from 'react'
import { shallow } from 'enzyme'
import GameContainer from './GameContainer'
import Game from './Game'

jest.mock('./utils/random')
import { randomBetween0and2 } from './utils/random'

it('renders without crashing', () => {
  const wrapper = shallow(<GameContainer />)
  expect(wrapper.find(Game).length).toEqual(1)
});

it('passes a false finished prop to Game', () => {
  const wrapper = shallow(<GameContainer />)
  expect(wrapper.find(Game).props().finished).toEqual(false)
})

it('toggles the finished prop when handleSelection is called', () => {
  const wrapper = shallow(<GameContainer />)
  const instance = wrapper.instance()
  instance.handleSelection(0)()
  expect(wrapper.find(Game).props().finished).toEqual(true)
})

it('should randomize the initially selected correct card index', () => {
  randomBetween0and2.mockImplementation(() => 'foo')
  const wrapper = shallow(<GameContainer />)
  expect(wrapper.state().ballBeneath).toEqual('foo')
})

it('should reset the state when reset is called', () => {
  randomBetween0and2
    .mockImplementationOnce(() => 0)
    .mockImplementation(() => 1)

  const wrapper = shallow(<GameContainer />)
  const instance = wrapper.instance()

  instance.handleSelection(0)()
  expect(wrapper.state().ballBeneath).toEqual(0)
  expect(wrapper.state().won).toEqual(true)
  expect(wrapper.state().lost).toEqual(false)

  instance.reset()
  expect(wrapper.state().ballBeneath).toEqual(1)
  expect(wrapper.state().won).toEqual(false)
  expect(wrapper.state().lost).toEqual(false)
})
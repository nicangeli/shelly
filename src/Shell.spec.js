import React from 'react'
import Shell, { Circle } from './Shell'
import { mount } from 'enzyme'

it('should render a circle inside if it is the selected shell', () => {
    const wrapper = mount(<Shell handleSelection={jest.fn()} ballBeneath={0} index={0} />)
    expect(wrapper.find(Circle).length).toEqual(1)
})

it('should not render the circle if it is not the selected shell', () => {
    const wrapper = mount(<Shell handleSelection={jest.fn()} ballBeneath={0} index={1} />)
    expect(wrapper.find(Circle).length).toEqual(0)
})

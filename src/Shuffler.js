import React from 'react'
import _ from 'lodash'
import { setIntervalN } from './utils/setinterval'

const WIDTH_OF_CARD = 200

class Shuffler extends React.Component {
    state = {
        newOrderForChildren: _.range(0, React.Children.count(this.props.children))
    }
    componentDidMount () {
        setIntervalN(() => {
            const newOrderForChildren = _.shuffle(this.state.newOrderForChildren)
            this.setState({newOrderForChildren})
        }, 500, 5)
    }
    getPosition = (index) => {
       return this.state.newOrderForChildren[index] * WIDTH_OF_CARD
    }
    render () {
        const children = React.Children.map(this.props.children, (child, i) => {
            return React.cloneElement(child,
                {
                    style: {
                        position: 'absolute',
                        left: this.getPosition(i)
                    }
                }
            )
        })
        return ( 
            <div style={{position: 'relative', display: 'flex'}}>
                {children}
            </div>
        )
    }
}

export default Shuffler
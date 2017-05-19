import React from 'react'
import _ from 'lodash'

const WIDTH_OF_CARD = 200

class Shuffler extends React.Component {
    state = {
        transitioned: false
    }
    componentDidMount () {
        setTimeout(() => {
            const childrenIndexes = _.range(0, React.Children.count(this.props.children))
            const newOrderForChildren = _.shuffle(childrenIndexes)
            this.setState({transitioned: true, newOrderForChildren})
        }, 2000)
    }
    getPosition = (index) => {
        if (!this.state.transitioned) {
            return index * WIDTH_OF_CARD
        }
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
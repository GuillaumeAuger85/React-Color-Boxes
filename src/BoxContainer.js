import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
    static defaultProps = {
        boxNumber: 18
    }
    render() {
        const boxes = [];
        for (let i = 0; i < this.props.boxNumber; i++) {
            boxes[i] = <Box />
        }
        return (
            <div className='BoxContainer'>
                {boxes}
            </div>
        )
    }
}

export default BoxContainer
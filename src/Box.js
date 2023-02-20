import React, { Component } from 'react';
import './Box.css'


class Box extends Component {
    static defaultProps = {
        colors: ['#001219', '#0A9396', '#E9D8A6', '#CA6702', '#AE2012']
    }
    constructor(props) {
        super(props)
        this.state = { color: this.props.colors[Math.floor(Math.random() * this.props.colors.length)]};
        this.handleClick = this.handleClick.bind(this)
    }
    changeColor() {
        let newColors =  this.props.colors.filter(color => color !== this.state.color );
        let newColor= newColors[Math.floor(Math.random() * newColors.length)];
        this.setState({ color: newColor })
    }
    handleClick() {
        this.changeColor();
    }
    render() {
        return (
            <div className='Box' style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>
        )
    }
}

export default Box
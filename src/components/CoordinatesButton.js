import React, {Component} from 'react'

export default class CoordinatesButton extends React.Component {
    render(){
        return(
            <button onClick={(e) => this.props.onReceiveCoordinates([e.clientX, e.clientY])}>Coordinates Button</button>
        )
    }
}

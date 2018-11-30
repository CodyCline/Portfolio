//Custom hexagon symbol from here following their styling guides => https://material.io/design/shape/about-shape.html#shaping-material
import React from 'react';
import './Hexagon.scss'

class Hexagon extends React.Component {
    render () {
        return (
            <svg version="1.1" className="hexagon" width={this.props.width} height={this.props.height} viewBox="0 0 200 173.20508075688772"><path fill={this.props.color} d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"></path></svg>
        );
    }
}

export default Hexagon;
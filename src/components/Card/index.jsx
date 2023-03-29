import React, { Component } from 'react'
import "./card.scss"

export default class Card extends Component {
    render() {
        return (
            <div className='div-card' onClick={()=>{this.props.clicked(this.props.char)}}>
                <h2>{this.props.char.name}</h2>
                <img src={this.props.char.image} alt="" />
            </div>
        )
    }
}

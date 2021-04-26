import React, { Component } from 'react'

export default class Foundation extends Component {
    render() {
        return (
                <div className="box">
                    <div><img className="foundation-img"src="https://media0.giphy.com/media/YMpAIvLyFVKVujy5bH/giphy.gif" alt="makeup"/></div>
                    <div>{this.props.foundationProp.name}</div>
                    <div><img className="product-img" src={this.props.foundationProp.image_link}alt="product"/></div>
                    <div>{this.props.foundationProp.brand}</div>
                    <div>{this.props.foundationProp.color}</div>  
                    <div style={{color:this.props.foundationProp.hex}}><button className="color"></button></div>
                </div>
           
        )
    }
}

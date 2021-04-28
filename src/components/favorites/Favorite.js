import React, { Component } from 'react'

export default class Favorite extends Component {



    
    render() {
        return (
            <div>
                 <ul className="box">
                    <li>
                        <img
                        className="foundation-img"
                        src="https://media0.giphy.com/media/YMpAIvLyFVKVujy5bH/giphy.gif"
                        alt="makeup"
                        />
                    </li>
                    <li>{this.props.favoriteProp.name}</li>
                    <li>
                    <img
                        className="product-img"
                        src={this.props.favoriteProp.image_link}
                        alt="product"
                        />
                    </li>
                    <li>{this.props.favoriteProp.brand}</li>
                    <li>{this.props.favoriteProp.color}</li>
                    <li>
                    <button
                        style={{ backgroundColor: this.props.favoriteProp.hex }}
                        className="color"
                        disabled
                        ></button>

                    <button onClick={this.handleSubmit}>Like Button</button>

                    </li>{' '}
                </ul> 
            </div>
        )
    }
}

/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'

export default class Favorite extends Component {



    
    render() {
        return (
            <div>
                 <ul className="box">
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

                    {/* <button onClick={this.handleSubmit}>Like Button</button> */}

                    </li>
                    <li>
                        <a href={this.props.favoriteProp.product_link} target="_blank">Buy Now!</a>
                    </li>{' '}
                </ul> 
            </div>
        )
    }
}

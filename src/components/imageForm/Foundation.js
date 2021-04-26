import React, { Component } from 'react'

export default class Foundation extends Component {
    render() {
        return (
            <div>
                 <div className="foundation">
                <div>{this.props.foundationProp.name}</div>
                <div>{this.props.foundationProp.brand}</div>
                <div>{this.props.foundationProp.color}</div> 
                </div>
            </div>
           
        )
    }
}

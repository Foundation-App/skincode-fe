import React, { Component } from 'react'
import { getTest, postImage } from '../../apiUtils';

export class Imageform extends Component {

    state = {
        testName: '',
        imageUrl: '',
    }

    onButtonSubmit = async (e) => {
        e.preventDefault();
        console.log('this button is working');
        const test = await getTest()
        console.log(test)
        await this.setState({ testName: test })
        console.log(this.state.imageUrl, 'POOP')

        const image = postImage(this.state.imageUrl)
        console.log(image, 'IMAGE')
    }

    onInputChange = (e) => {
        this.setState({
            imageUrl: e.target.value
        })
        console.log(typeof e.target.value, 'INPUT VALUE')
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onButtonSubmit}>
                    <input type='text' onChange={this.onInputChange}></input>
                    <button>submit</button>
                </form>

                <p>{this.state.testName}</p>
                <p>{this.state.imageUrl}</p>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { postImage } from '../../apiUtils'
import FoundationList from './FoundationList';

export default class Cloudinary extends Component {

    state = { 
        foundations: [],
        loading: true
    }

    showWidget = () => {
        let widget = window.cloudinary.createUploadWidget({ 
           cloudName: `skincode`,
           uploadPreset: `test_preset`, 
           cropping: true,
           sources: ['local', 'url', 'camera'],
           styles : { 
             palette: { 
                 window: "#FFF",
                 windowBorder: "#90A0B3",
                 
             }  
           }
        }, 
        (error, result) => {
          if (!error && result && result.event === "success") { 
              console.log(result.info.url, 'here is your new link!'); 
              //once we get the url here, we want to send it to the backend???
              //can I call my postImage function here and use result.info.url as the parameter?
              postImage(result.info.url).then(makeupData => this.setState({
                  foundations: makeupData
              }));
        } 
        // else { 
        //     console.log( `Uh oh!, it looks like ${error}, please try again!`);
        // }
        });
        widget.open()
      }


    render() {
        return (
            <div>
                 <div>Are you ready to find your SkinCode()?</div>
                <ol>
                    <li>Take a Selfie</li>
                    <li>Make sure you are in natural lighting...we want to find your perfect swatch!</li>
                    <li>Use our crop feature just to get your face</li>
                    <li>Upload your picture</li>
                    <li>Let us do the rest!!!</li>
                </ol>
                <button onClick={this.showWidget}>Upload Image</button>
                {/* <div>{JSON.stringify(this.state.foundations)}</div> */}
                <FoundationList
                    mapFoundations={this.state.foundations}/>
               
            </div>
        )
    }
}

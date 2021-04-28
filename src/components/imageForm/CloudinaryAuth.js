import React, { Component } from 'react'
import { postAuthImage } from '../../apiUtils'
import FoundationList from './FoundationList';

export default class CloudinaryAuth extends Component {

    state = { 
        foundations: [],
        loading: true,
    }
//==============
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
            tabIcon: "#0E2F5A",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link:  "#0078FF",
            action:  "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#FFF"
             
         }  
       }
    }, 
    (error, result) => {
      if (!error && result && result.event === "success") { 
          console.log(result.info.url, 'here is your new link! NEW LINK========='); 

          postAuthImage(result.info.url, this.props.user.token).then(makeupData => this.setState({
              foundations: makeupData
          }));

    } 

    });
    widget.open()
  }
//==============

    render() {
        return (
            <div className="instructions">
                 <div className="title">Are you ready to find your SkinCode()?</div>
                <ul className="steps">
                    <li>1 Take a Selfie</li>
                    <li>2 Make sure you are in natural lighting...we want to find your perfect swatch!</li>
                    <li>3 Use our crop feature just to get your face</li>
                    <li>4 Upload your picture</li>
                    <li>5 Let us do the rest!!!</li>
                </ul>
                <button className="upload" onClick={this.showWidget}>Upload Image</button>
                <FoundationList mapFoundations={this.state.foundations}/>
               
            </div>
        )
    }
}

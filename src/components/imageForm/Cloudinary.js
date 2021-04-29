
import React, { Component } from 'react'
import { postImage, putCloudinaryInLocalStorage, putDateInLocalStorage } from '../../apiUtils'

import FoundationList from './FoundationList';
import NavBar from '../HomePage/NavBar';
import Icon3 from '../../images/logo3.gif';
import Icon2 from '../../images/logo2.gif';
import Icon1 from '../../images/logo1.gif';
import {
  StepsContainer,
  StepsH1,
  StepsWrapper,
  StepsCard,
  StepsIcon,
  StepsH2,
  StepsP
} from './StepsStyling';

export default class Cloudinary extends Component {



    state = { 
        bestFoundations: [],
        goodFoundations: [],
        loading: true,
        cloudinary: '',
        date: new Date().toLocaleString()
        
    }

    showWidget = () => {
        this.setState({foundations: [] });
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
              console.log(result.info.url, 'here is your new link!'); 

              this.setState({
                cloudinary: result.info.url
            })

              postImage(result.info.url).then(makeupData => this.setState({
                bestFoundations: makeupData[0],
                goodFoundations: makeupData[1]
              }))

              putCloudinaryInLocalStorage(this.state.cloudinary)
              putDateInLocalStorage(this.state.date)

        } 

      }
    );
    widget.open();
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <StepsContainer id="Steps">
          <StepsH1>How it Works.</StepsH1>
          <StepsWrapper>
            <StepsCard>
              <StepsIcon src={Icon1} />
              <StepsH2>We wanna see your selfies!</StepsH2>
              <StepsP>
                We want to see that beautiful face. Use our image uploader to
                either take a selfie, upload a selfie, or paste in a URL image.
                Just make sure you're in natural lighting for accurate results.
              </StepsP>
            </StepsCard>
            <StepsCard>
              <StepsIcon src={Icon2} />
              <StepsH2>Upload Image</StepsH2>
              <StepsP>
                Once you feel like you've got the best picture. Go ahead and hit
                upload and watch the magic unfold.
              </StepsP>
            </StepsCard>
            <StepsCard>
              <StepsIcon src={Icon3} />
              <StepsH2>Unlock your skincode</StepsH2>
              <StepsP>
                You've got a match! Feel free to favorite your best matches. If
                there aren't any matches, start again and make sure you're
                following all the steps.
              </StepsP>
            </StepsCard>
          </StepsWrapper>
          <button className="upload" onClick={this.showWidget}>
            Upload Image
          </button>
          <FoundationList mapFoundations={this.state.bestFoundations} />
          <FoundationList mapFoundations={this.state.goodFoundations} />
        </StepsContainer>

        {/* // <div className="instructions">
            //      <div className="title">Are you ready to find your SkinCode()?</div>
            //     <ul className="steps">
            //         <li>Take a Selfie</li>
            //         <li>Make sure you are in natural lighting...we want to find your perfect swatch!</li>
            //         <li> Use our crop feature just to get your face</li>
            //         <li>Upload your picture</li>
            //         <li>Let us do the rest!!!</li>
            //     </ul> */}
      </div>
    );
  }
}

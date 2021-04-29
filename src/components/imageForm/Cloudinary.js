import React, { Component } from 'react';
import {
  postImage,
  putCloudinaryInLocalStorage,
  putDateInLocalStorage
} from '../../apiUtils';

import FoundationList from './FoundationList';
import StepsNavBar from './StepsNav';
import Icon3 from '../../images/logo3.gif';
import Icon2 from '../../images/logo2.gif';
import Icon1 from '../../images/logo1.gif';
import upload from '../../images/upload.png';
import {
  StepsContainer,
  StepsH1,
  StepsWrapper,
  StepsCard,
  StepsIcon,
  StepsH2,
  StepsP,
  StepsButton,
  StepsImage
} from './StepsStyling';

export default class Cloudinary extends Component {
  state = {
    bestFoundations: [],
    goodFoundations: [],
    loading: true,
    cloudinary: '',
    date: new Date().toLocaleString()
  };

  showWidget = () => {
    this.setState({ foundations: [] });
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: `skincode`,
        uploadPreset: `test_preset`,
        cropping: true,
        sources: ['local', 'url', 'camera'],
        styles: {
          palette: {
            window: '#FFF',
            windowBorder: '#90A0B3',
            tabIcon: '#0E2F5A',
            menuIcons: '#5A616A',
            textDark: '#000000',
            textLight: '#FFFFFF',
            link: '#0078FF',
            action: '#FF620C',
            inactiveTabIcon: '#0E2F5A',
            error: '#F44235',
            inProgress: '#0078FF',
            complete: '#20B832',
            sourceBg: '#FFF'
          }
        }
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log(result.info.url, 'here is your new link!');

          this.setState({
            cloudinary: result.info.url
          });
          
          postImage(result.info.url).then((makeupData) => {
            console.log(makeupData);
            if (makeupData.length > 0) {

              this.setState({
                bestFoundations: makeupData[0],
                goodFoundations: makeupData[1]
              });
            } else alert('no face detected, please try again');
          });

          putCloudinaryInLocalStorage(this.state.cloudinary);
          putDateInLocalStorage(this.state.date);
        }
      }
    );
    widget.open();
  };

  

  render() {
    console.log(JSON.stringify(document.cookie), 'CAN YOU SEE THIS COOKIE');

    return (
      <div>
        <StepsNavBar></StepsNavBar>
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
          <StepsButton onClick={this.showWidget}>
            <StepsImage src={upload} alt="upload"></StepsImage>
          </StepsButton>
          <FoundationList mapFoundations={this.state.bestFoundations} />
          <FoundationList mapFoundations={this.state.goodFoundations} />
        </StepsContainer>
      </div>
    );
  }
}

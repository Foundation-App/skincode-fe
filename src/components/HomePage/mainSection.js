import React from 'react';


import Video from '../../videos/SkinCode.mp4';
import {
  MainContainer,
  MainBg,
  VideoBg,
  MainContent,
  MainH1,
  MainP,
  MainBtnLink
} from './mainStyling';

function MainSection() {
  
  return (
    <MainContainer id='home'>
      <MainBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </MainBg>
      <MainContent>
        <MainH1>Welcome to SkinCode()</MainH1>
        <MainP>
          Need to figure out what we're gonna write here.
        </MainP>
        <MainBtnLink to='/signup' className="main">Get Started!</MainBtnLink>
      </MainContent>
    </MainContainer>
  );
}

export default MainSection;
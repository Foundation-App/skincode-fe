import React from 'react';



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
        <VideoBg playsInline autoPlay loop muted src="https://res.cloudinary.com/techhire/video/upload/v1619632998/yt1s.com_-_SkinCode_1080p_hohxaj.mp4" type='video/mp4' />
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
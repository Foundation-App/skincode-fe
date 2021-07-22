import React, { Component } from 'react';
import Nav from './NavBar/NavBarAbout'
import {
  AboutContainer,
  AboutH1,
  AboutWrapper,
  AboutCard,
  AboutH2,
  AboutP,
  AboutIcon
} from './AboutStyling';
import katie from '../../images/katie.jpg'
import zina from '../../images/zina.jpeg'
import claud from '../../images/claud.jpg'
import cici from '../../images/cierra.jpg'
import Footer from '../HomePage/Footer/Footer'




export default class About extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>


        <AboutContainer id="About" style= {{background:'#fff6e8'}}>
        <AboutH1></AboutH1>
        <AboutH1></AboutH1>
        <AboutH1></AboutH1>
        <AboutH1>Our Story</AboutH1>
        <AboutP style= {{background:'', marginLeft:"15%", marginRight:"15%"}}>
        Welcome to SkinCode() an AI powered app designed to help you find your perfect foundation match. With this app a user is able to upload an image of themselves, and as a result are recommended a few foundations that closely match their skin tone. One of the main problems we were hoping to solve with this technology, is that most folks of color have a difficult time finding their foundation shades, especially if they only have access to drugstores where you’re not allowed to test before buying. This is due to the historic lack of representation in the beauty industry for darker skinned folks, and that’s something that we heavily took into consideration when creating the app. In the beginning of our sprint we began researching similar technologies that already exist we didn’t really come across many AI powered foundation matchers. Most required you to have an already existing perfect foundation match to reference, we found this to be counter productive as people looking for a new foundation, likely don’t have one that already matches well. With SkinCode() you have an easily accessible tool created with a diverse user demographic in mind.
        </AboutP>



        {/* <AboutContainer id="About"> */}
          <AboutH1></AboutH1>
          <AboutH1>Meet The Team</AboutH1>
          <AboutWrapper style= {{background:''}}>
            <AboutCard>
              <AboutH2>Katilyn Wiggins</AboutH2>
              <AboutIcon src={katie} />
              {/* <AboutP>
                Developer, thrifter, crafter, easily lost on purpose.
              </AboutP> */}
            </AboutCard>
            <AboutCard>
              <AboutH2>Zina Mohamed</AboutH2>
              <AboutIcon src={zina} />
              {/* <AboutP>
                Software developer, lover of all things sci-fi, somewhere listening to Andre-3000.
              </AboutP> */}
            </AboutCard>
            <AboutCard>
              <AboutH2>Claudia Mazariegos</AboutH2>
              <AboutIcon src={claud} />
              {/* <AboutP>
              Software developer, beachgoer, usually somewhere basking in the sun. 
              </AboutP> */}
            </AboutCard>
            <AboutCard>
              <AboutH2>Cierra McDonald</AboutH2>
              <AboutIcon src={cici} />
              {/* <AboutP>
                Developer, plant mom, traveler, dancing to the beat of her own drum 
              </AboutP> */}
            </AboutCard>
          </AboutWrapper>
        {/* </AboutContainer> */}
        <AboutH1></AboutH1>
        </AboutContainer>

        <Footer/>
      </div>
    );
  }
}
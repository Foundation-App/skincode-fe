import React, { Component } from 'react';
import Nav from '../HomePage/NavBar'
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




export default class About extends Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <AboutContainer id="About">
          <AboutH1>Meet The Team</AboutH1>
          <AboutWrapper>
            <AboutCard>
              <AboutH2>Katilyn Wiggins</AboutH2>
              <AboutIcon src={katie} />
              <AboutP>
                Developer, thrifter, crafter, easily lost on purpose.
              </AboutP>
            </AboutCard>
            <AboutCard>
              <AboutH2>Zina Mohamed</AboutH2>
              <AboutIcon src={zina} />
              <AboutP>
                Software developer, lover of all things sci-fi, somewhere listening to Andre-3000.
              </AboutP>
            </AboutCard>
            <AboutCard>
              <AboutH2>Claudia Mazariegos</AboutH2>
              <AboutIcon src={claud} />
              <AboutP>
              Software developer, beachgoer, usually somewhere basking in the sun. 
              </AboutP>
            </AboutCard>
            <AboutCard>
              <AboutH2>Cierra McDonald</AboutH2>
              <AboutIcon src={cici} />
              <AboutP>
                Developer, plant mom, traveler, dancing to the beat of her own drum 
              </AboutP>
            </AboutCard>
          </AboutWrapper>
        </AboutContainer>
      </div>
    );
  }
}
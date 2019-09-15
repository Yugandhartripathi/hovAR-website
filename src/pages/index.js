import React from "react"
import styled, { keyframes, createGlobalStyle } from "styled-components"
import Monoton from "../../styles/fonts/Monoton-Regular.ttf"
import Assistant from "../../styles/fonts/Assistant-ExtraLight.ttf"
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faArrowDown,
  faHeart,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import { fab, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { Helmet } from "react-helmet"
import Typist from "react-typist"
import ResponsivePlayer from "react-player"

library.add(faArrowDown, faHeart, faEnvelope, fab, faGithub, faLinkedin)

/*Styled Components*/

const down = keyframes`
  0%, 50%, 100% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-10px);
  }
  75% {
    transform: translateY(-10px);
  }
`

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  @font-face {
    font-family: 'Monoton';
    src: url(${Monoton});
  }

  @font-face {
    font-family: 'Assistant';
    src: url(${Assistant});
  }

  body::-webkit-scrollbar {
      display: none;
  }
`

const Container = styled.div`
  backgroud-color: black;
  min-height: 100vh;
`

const Main = styled.div`
  background-color: black;
  z-index: -1;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  color: #c6e2ff;
`

const VideoBackground = styled.video`
  height: 110vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  top: -5vh;
  left: 0;
`

const Logo = styled.div`
  z-index: 2;
  height: 290px;
  width: 590px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 140px;
  pointer-events: none;
  @media (max-width: 620px) {
    font-size: 120px;
    width: 490px;
  }
  @media (max-width: 520px) {
    font-size: 100px;
    width: 390px;
    height: 210px;
  }
  @media (max-width: 420px) {
    font-size: 87px;
    width: 310px;
    height: 190px;
  }
  @media (max-width: 336px) {
    font-size: 80px;
    width: 300px;
    height: 180px;
  }
  @media (max-width: 316px) {
    font-size: 75px;
    width: 300px;
    height: 180px;
  }
`

const LogoHov = styled.div`
  font-family: "Assistant", cursive;
  color: #66ff7f;
  border-bottom: 10px solid #66ff7f;
  position: relative;
  &:after {
    content: "";
    background: linear-gradient(to top, #66ff7f, #0022cc);
    border-radius: 20px;
    width: 10px;
    height: 182px;
    z-index: 2;
    position: absolute;
    top: 11px;
    left: 260px;
    transform: skew(-12deg);
  }
`

const LogoAR = styled.div`
  font-family: cursive;
  z-index: 2;
  color: #0022cc;
  border-top: 10px solid #0022cc;
`

const Subheading = styled.span`
  z-index: 2;
  font-size: 25px;
  font-weight: 800;
  font-family: "Assistant", sans-serif;
  margin-top: -17px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 620px) {
    font-size: 22px;
  }
  @media (max-width: 520px) {
    font-size: 20px;
  }
  @media (max-width: 420px) {
    font-size: 19px;
    width: 250px;
  }
  @media (max-width: 336px) {
    font-size: 17px;
    width: 250px;
  }
  @media (max-width: 316px) {
    font-size: 15px;
    width: 250px;
  }
`

const Arrowdown = styled.div`
  z-index: 2;
  position: absolute;
  top: 90%;
  left: 50%;
  margin-left: -15px;
  animation: ${down} 1800ms ease-in-out infinite;
`

const Mission = styled.section`
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 420px) {
    padding: 10px;
  }
`

const MissionBody = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 15px;
  font-family: "Assistant", sans-serif;
`

const MissionHead = styled.span`
  font-size: 55px;
  border-bottom: 1px solid white;
  padding-bottom: 7px;
  margin-bottom: 45px;
`

const MissionDesc = styled.div`
  text-align: center;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.02em;
  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const Why = styled.section`
  min-height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding-left: 100px;
  padding-right: 100px;
  @media (max-width: 420px) {
    padding: 10px;
  }
`

const Whyus = styled.div`
  background-color: black;
  min-height: 100vh;
  min-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding: 15px;
  font-family: "Assistant", sans-serif;
`

const Whyheading = styled.span`
  font-size: 55px;
  border-bottom: 1px solid white;
  padding-bottom: 7px;
  margin-bottom: 45px;
`

const WhyContent = styled.span`
  width: 100%;
  height: 90vh;
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: row;
  flex-wrap: wrap;
`

const WhyDesc = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column;
`

const Whytext = styled.span`
  max-width: 600px;
  font-size: 23px;
  font-weight: 400;
  letter-spacing: 0.02em;
  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const WhyButtons = styled.span`
  width: 100%;
  max-width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: row;
  flex-wrap: wrap;
`

const WhyButton1 = styled.span`
  width: 250px;
  border: 1px solid #ffff19;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  margin: 10px;
  font-family: "Assistant", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #ffff19;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 280px 0px 0 0 #ffff19;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const WhyButton2 = styled.span`
  width: 250px;
  border: 1px solid #f50057;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  margin: 10px;
  font-family: "Assistant", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #f50057;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 280px 0px 0 0 #f50057;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const WhyButton3 = styled.span`
  width: 250px;
  border: 1px solid #1966ff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  margin: 10px;
  font-family: "Assistant", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #1966ff;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 280px 0px 0 0 #1966ff;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const WhyButton4 = styled.span`
  width: 250px;
  border: 1px solid #22c677;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  margin: 10px;
  font-family: "Assistant", sans-serif;
  font-weight: 400;
  font-size: 23px;
  color: #22c677;
  transition: all 180ms ease-in-out;

  &:hover {
    box-shadow: inset 280px 0px 0 0 #22c677;
    cursor: pointer;
    color: black;
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`
const WhyGraphic = styled.div`
  position: relative;
  top: -100px;
  height: 0;
  min-width: 400px;
  padding-top: 56.25%;
  border-radius: 10px;
  object-fit: cover;
  background: black;
  transform: perspective(400px) skewX(-5deg) rotateY(-5deg);
`

/*
const WhyVRScreen = styled.span`
  border-radius: 10px;
  transform: inherit;
  height: 90%;
  width: 100%;
  background-color: white;
  transform: perspective(2000px) rotateY(-20deg);
`;
const WhyVRButtons = styled.span`
  transform: inherit;
  height: 10%;
  width: 100%;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  transform: perspective(4000px) rotateY(-20deg) rotateZ(2.5deg);
`;
const WhyVRSceneNext = styled.span`
  height: 100%;
  width: 40%;
  color: white;
  background-color: red;
`;
const WhyVRScenePrev = styled.span`
  height: 100%;
  width: 40%;
  color: white;
  background-color: red;
`;
/*

/* Contact links */

const ContactSection = styled.div`
  min-height: 400px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 50px;
  background-color: black;
  color: white;
  font-family: "Assistant", sans-serif;

  @media (max-width: 420px) {
    padding-top: 40px;
  }
`

const FindHead = styled.div`
  font-size: 55px;
  padding-bottom: 7px;
  border-bottom: 1px solid white;

  @media (max-width: 600px) {
    margin-bottom: 50px;
  }
`

const IconsContainer = styled.div`
  min-height: 160px;
  width: 75%;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`

const GithubLink = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: "Assistant", sans-serif;
  font-size: 23px;
  transition: all 180ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const EmailLink = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: "Assistant", sans-serif;
  font-size: 23px;
  transition: all 180ms ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const LinkedINLink = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 12px;
  font-family: "Assistant", sans-serif;
  font-size: 23px;
  transition: all 180ms ease-in-out;

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  @media (max-width: 1366px) and (min-width: 1200px) {
    width: 150px;
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
  }
`

const Alink = styled.a`
  text-decoration: none;
  outline: none !important;
  &:focus {
    outline: none;
    text-decoration: none;
  }

  &:active {
    outline: none;
    text-decoration: none;
  }
`

const Footer = styled.footer`
  font-weight: 400;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`

const HighlightReel = styled.div`
  font-weight: 800;
  color: #0f0;
`

const handleArrowClick = e => {
  e.preventDefault()

  // get the id of the element to scroll to. e.g. "#Mission"
  const targetQuery = e.currentTarget.getAttribute("href")

  // scroll the element into view
  document.querySelector(targetQuery).scrollIntoView({ behavior: "smooth" })
}

let url = "https://www.youtube.com/embed/nwnItPjI17U?enablejsapi=1"
let playing = true
let muted = true
let loop = true
let firstTime = true
var gplayer

const Ref = player => {
  gplayer = player
}

const handlePause = () => {
  console.log("onPause")
  playing = false
  gplayer.getInternalPlayer().pauseVideo()
}

const handlePlay = () => {
  console.log("onPlay")
  playing = true
  gplayer.getInternalPlayer().playVideo()
}

const handlePreLoad = () => {
  if (firstTime) {
    firstTime = false
    console.log("Stopping for the first time")
    handlePause()
    gplayer.getInternalPlayer().unMute()
  } else {
    console.log("Not First Time")
  }
}

/* Main */

export default () => (
  <Container>
    <GlobalStyle />
    <Helmet>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="hovAR" content="Changing Realities!" />
      <title>hovAR</title>
      <link rel="icon" type="image/png" href="icon.png" sizes="64x64" />
    </Helmet>

    <Main>
      <VideoBackground autoPlay muted loop importance="high">
        <source src="output.mp4" type="video/mp4" />
      </VideoBackground>
      <Logo>
        <LogoHov>HOV</LogoHov>
        &nbsp;
        <LogoAR>AR</LogoAR>
      </Logo>
      <Subheading>
        <Typist className="MyTypist" cursor={{ hideWhenDone: true }}>
          <Typist.Delay ms={1000} />
          Changing Realities!
        </Typist>
      </Subheading>
      <Arrowdown>
        <a href="#mission" onClick={handleArrowClick}>
          <FontAwesomeIcon icon="arrow-down" color="#fff" size="2x" />
        </a>
      </Arrowdown>
    </Main>

    <Mission id="mission">
      <MissionBody>
        <MissionHead>Mission</MissionHead>
        <MissionDesc>
          Revolutionize Education, HealthCare, Marketing, Entertainment
          industries and solve any and all problems that we may encounter on our
          journey using{" "}
          <HighlightReel>Augmented and Virtual Reality</HighlightReel>&amp;
          <br></br>
          To make Augmented and Virtual Reality more accessible and it's
          experience user-friendly and fulfilling.
        </MissionDesc>
      </MissionBody>
    </Mission>

    <Why id="whyus" onMouseEnter={handlePlay} onMouseLeave={handlePause}>
      <Whyus>
        <Whyheading>Why Us?</Whyheading>
        <WhyContent>
          <WhyDesc>
            <Whytext>
              We are working with AR and VR technology for 2 years now and we
              have first hand experienced the rapid developments in the field,
              experimenting and learning it's different aspects along the way.
              Here are some of our public projects we have worked on and
              presented in various events to get valuable inputs and scope for
              improvements because <br></br>"To Learn is to Grow!"
              <br></br>
              So check these out and if they pique your interest or raise any
              queries connect with us. We would love to solve your problems.
            </Whytext>
            <WhyButtons>
              <WhyButton1>App 1</WhyButton1>
              <WhyButton2>App 2</WhyButton2>
              <WhyButton3>App 3</WhyButton3>
              <WhyButton4>App 4</WhyButton4>
            </WhyButtons>
          </WhyDesc>
          <WhyGraphic>
            <ResponsivePlayer
              ref={Ref}
              onReady={() => console.log("DemoVideo Ready")}
              onStart={handlePreLoad}
              url={url}
              width="100%"
              height="100%"
              playing={playing}
              muted={muted}
              loop={loop}
              config={{
                youtube: {
                  playerVars: {
                    modestbranding: 1,
                    fs: 0,
                    start: 30,
                  },
                  preload: true,
                },
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                objectFit: "cover",
                zIndex: 2,
                border: "5px solid #242424",
                borderRadius: "10px",
              }}
            />
          </WhyGraphic>
        </WhyContent>
      </Whyus>
    </Why>

    <ContactSection>
      <FindHead>Let's Get In Touch!</FindHead>
      <IconsContainer>
        <Alink href="https://github.com/team-tstar/" target="_blank">
          <GithubLink>
            <FontAwesomeIcon
              icon={["fab", "github"]}
              color="#fff"
              size="5x"
            ></FontAwesomeIcon>
          </GithubLink>
        </Alink>
        <Alink
          href="mailto:tripathi.yugandhar@gmail.com?cc=Neel.kukreti23@gmail.com&amp;subject=Enquiry%20from%20Website"
          target="_blank"
        >
          <EmailLink>
            <FontAwesomeIcon
              icon="envelope"
              color="#f00"
              size="5x"
            ></FontAwesomeIcon>
          </EmailLink>
        </Alink>
        <Alink href="https://www.linkedin.com/company/hov-ar" target="_blank">
          <LinkedINLink>
            <FontAwesomeIcon
              icon={["fab", "linkedin"]}
              color="#3399ff"
              size="5x"
            ></FontAwesomeIcon>
          </LinkedINLink>
        </Alink>
      </IconsContainer>
    </ContactSection>
    <Footer>
      Coded with&nbsp;
      <FontAwesomeIcon icon="heart" color="#f00" size="2x" />
      &nbsp;by&nbsp;
      <Alink
        href="https://www.linkedin.com/in/yugandhar-tripathi/"
        target="_blank"
      >
        @Yugandhartripathi
      </Alink>
      ;
    </Footer>
  </Container>
)

import { motion } from 'framer-motion'
import { lazy, Suspense, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { NavLink } from "react-router-dom";

import { DarkTheme, mediaQueries } from './Themes'
import Loading from '../subComponents/Loading';
//Components
const SocialIcons = lazy(() => import('../subComponents/SocialIcons'))
const PowerButton = lazy(() => import('../subComponents/PowerButton'))
const LogoComponent = lazy(() => import('../subComponents/LogoComponent'))
const ParticlesComponent = lazy(() =>
  import('../subComponents/ParticlesComponent')
)
const BigTitle = lazy(() => import('../subComponents/BigTitle'))


const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 150vw;
  height: 150vh;
  position: relative;
  overflow: hidden;
`

const Experience = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 3%;
left: 12%;
z-index: 1;
text-decoration: none;
@media only screen and (max-width: 50em) {
  text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`;

const SKILLS = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 3%;
left: 36%;
z-index: 1;
text-decoration: none;
@media only screen and (max-width: 50em) {
  text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`;

const PROJECTS = styled(NavLink)`
color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
position: absolute;
top: 3%;
left: 54%;
z-index: 1;
text-decoration: none;
@media only screen and (max-width: 50em) {
  text-shadow: ${(props) => (props.click ? "0 0 4px #000" : "none")};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 80vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 18rem;

  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 50vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: auto;
          backdrop-filter: none;
          margin-top:2rem;

  `};

${mediaQueries(20)`
          padding: 1rem;
          font-size: calc(0.5rem + 1vw);
  `};

`
const AboutPage = () => {
  const [click, setClick] = useState(false);
  const [path, setpath] = useState("");
  const mq = window.matchMedia("(max-width: 50em)").matches;

  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key='skills'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <LogoComponent theme='dark' />

          <Experience click={+click} to="/experience">
            <motion.h2
              onClick={() => setpath("experience")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Experience
            </motion.h2>
          </Experience>

          <SKILLS to="/skills">
            <motion.h2
              onClick={() => setpath("skills")}
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Skills
            </motion.h2>
          </SKILLS>

          <PROJECTS click={+click} to="/projects">
            <motion.h2
              onClick={() => setpath("projects")}
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Projects
            </motion.h2>
          </PROJECTS>

          <PowerButton />
          <SocialIcons theme='dark' />
          <ParticlesComponent theme='dark' />

          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}>
            Thanks for stopping by! Feel free to contact me anytime :)
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default AboutPage

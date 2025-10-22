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
I am a passionate and results oriented Software Engineer who thrives at the intersection of security, software engineering, and intelligent systems. My work focuses on designing secure, scalable, and data driven solutions that empower organizations to operate with reliability and trust.

As an Associate Security Software Engineer at Goldman Sachs, I contribute to the firm’s Automated Certificate Management platform, building secure identity and access management (IAM) infrastructure used across global applications. My role involves developing and integrating certificate lifecycle automation with Java and Python, deploying multi cloud resources with Terraform and AWS CDK, and implementing encryption and PKI best practices to ensure compliance and resilience at scale. Collaborating closely with platform and security teams, I help strengthen authentication systems, improve observability, and drive initiatives that enhance the firm’s enterprise security posture.

Before Goldman, I worked at Massachusetts Institute of Technology, where I advanced from Security Software Engineer I to II. There, I led development of event driven systems and large scale observability frameworks using Python, Rust, Java, and AWS, integrating machine learning to automate vulnerability prioritization and improve system reliability. I also designed validation pipelines for massive data lakes, modernized zero trust network architectures, and mentored junior engineers while coordinating technical demonstrations for key stakeholders. My experience taught me how to bridge innovative research with practical, production level engineering, crafting systems that are both cutting edge and robust.

Beyond my professional work, I am pursuing a Master of Science in Computer Science (AI and Machine Learning specialization) at the Georgia Institute of Technology, expanding my expertise in intelligent automation, predictive modeling, and applied data systems. I hold a Bachelor of Science in Computer Science (Cybersecurity specialization) from Louisiana State University, where I also contributed as a researcher, instructor, and mentor within the College of Engineering.

I am driven by the challenge of building technology that is not only secure and performant but purposeful, creating solutions that merge the precision of software engineering with the intelligence of machine learning to solve problems that truly matter.

Thanks for stopping by! Feel free to contact me anytime! :)
          </Main>
          <BigTitle text='ABOUT' top='10%' left='5%' />
        </Box>
      </Suspense>
    </ThemeProvider>
  )
}

export default AboutPage

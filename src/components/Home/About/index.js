import AnimatedLetters from "../../AnimatedLetters";
import './index.scss'
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faCss3, faHtml5, faJava, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";

import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>As a meticulous and organized individual, I have actively pursued an entry-level position in the vast field of programming.</p>
          <p>With a strong aptitude for handling complex projects, I possess a natural inclination towards innovation, creativity, and a willingness to contribute ideas while continuously expanding my knowledge.</p>
          <p>My skills lie in Asp .NET, ASP .NET Web API, Angular, Material, and SQL. I am experienced in building websites and web applications, ensuring seamless functionality and user experience.</p>

        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color='#dd0031' />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color="red" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faHtml5} color='#28A4D9' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color='#EFD81D' />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color='#EC4D28' />
            </div>

          </div>

        </div>
      </div>
      <Loader type="pacman" style={{ position: "absolute", left: "5%", top: '5%' }} />

    </>
  )

}
export default About;
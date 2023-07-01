import { Link } from "react-router-dom";
import  chc from "../../assets/images/ChiragC.png"
import AnimatedLetters from "../AnimatedLetters";
import { useEffect,useState } from "react";
import './index.scss'
import Logo from "./Logo";
import Loader from "react-loaders";
import { GooeyCircleLoader } from "react-loaders-kit";
import Typed from "react-typed";

import {
    faLinkedin,
    faGithub,
    faYoutube,
    faSkype,
    faInstagram,
    faRProject,
    faAndroid,
    faProductHunt,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
    faCode,
  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','i','r','a','g']
    const jobArray  = ['A','n','g','u','l','a','r',' ','d','e','v','e','l','o','p','e','r',]

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 1000)
    //   }, [])

    useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
      const loaderProps = {
        loading: true,
        size: 275,
        duration: 2,
        colors: ["aqua", "red", "yellow"],
      };

      
    return(
        <>
            
        <div className="container home-page">
        <div className="text-zone">
        <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass}_22`}>i</span>
        <br/> 
            <span className={`${letterClass}_23`}>I</span>
            <span className={`${letterClass}_24`}>'m</span>

        <img src={chc} alt="C"/>
        <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={0}
        />
        <br/>
        <span className="myJob">
        <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={5}
        />

        </span>
        </h1>

        <h2 className="skills">.NET MVC | SQL (SSMS) </h2>
        <Link to={"/contact"} className="flat-button">Contact Me</Link>
        </div>

        {/* <Logo/> */}

        </div>

        {/* <Loader type="pacman" /> */}
        {!loaded ? (
            <div className="loader">
        <GooeyCircleLoader {...loaderProps} />
        <Typed
          className="loader-text" style={{color:'white'}}
          strings={["Loading..."]}
          typeSpeed={60}
          backSpeed={0}
        />
    </div>
      ):(
        
         <Loader />
      )}

        <div className="socialHandles">

        <ul>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/chirag-chavda">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.github.com/chiragbchavda">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.leetcode.com/chirag_chavda">
                <FontAwesomeIcon icon={faCode} color="#4d4d4e"/>
            </a>
        </li>
        <li>
            <a target="_blank" rel='noreferrer' href="https://www.instagram.com/hacker_0369">
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e"/>
            </a>
        </li>
    </ul>
    </div>
        </>
    )
};

export default Home;
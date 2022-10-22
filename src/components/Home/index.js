import { Link } from "react-router-dom";
import  chc from "../../assets/images/ChiragC.png"
import AnimatedLetters from "../AnimatedLetters";
import { useEffect,useState } from "react";
import './index.scss'
import Logo from "./Logo";
import Loader from "react-loaders";
const Home = () => {
    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['h','i','r','a','g']
    const jobArray  = ['A','n','d','r','o','i','d',' ','d','e','v','e','l','o','p','e','r',]

    // useEffect(() => {
    //     return setTimeout(() => {
    //       setLetterClass('text-animate-hover')
    //     }, 1000)
    //   }, [])

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    
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
        
        <AnimatedLetters letterClass={letterClass}
            strArray={jobArray}
            idx={5}
        />
        </h1>

        <h2>Java Enthusiast / Problem Solver / Learner </h2>
        <Link to={"/contact"} className="flat-button">Contact Me</Link>
        </div>

        {/* <Logo/> */}

        </div>
        <Loader type="pacman"/>
        
        </>
    )
};

export default Home;
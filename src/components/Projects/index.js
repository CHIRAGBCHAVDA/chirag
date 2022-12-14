import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react";
import Project1 from '../Card/Project1';

import Loader from 'react-loaders'

export default function Projects() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (

    <>

      <div className='container w-100'>

        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
                idx={15}
              />
            </h1>
          </div>
        </div>
        {/* <div style={{background:"orange",fontWeight:"700",display: "grid", gridAutoRows: "200px",textAlign:"center"}}>
        Byeee
          <div className="div-grid grid-t-col:repeat(2,2fr)" style={{background:"white",display: "grid", gridTemplateColumns: "repeat(2,2fr)",textAlign:"center", gridAutoRows: "200px"}}>
          <div style={{background:"yellow"}}>
            Hello
          </div>
          <div style={{background:"red"}}>
          Hi
          </div>
          </div>
        </div> */}

        <div className='pro d-flex'>
          <Project1/>
        </div>

      </div>
      
      <Loader type="pacman" style={{position:"absolute",left:"5%",top:'5%'}}/>

      




    </>
  )
}


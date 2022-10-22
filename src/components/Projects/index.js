import './index.scss'
import React from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from "react";
import Project1 from '../Card/Project1';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

        <div className='pro'>
          <Project1/>
        </div>

      </div>

      




    </>
  )
}


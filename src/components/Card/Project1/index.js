import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GImg from '../../../assets/images/guardianAngel.png'
import siriImg from '../../../assets/images/siriImg.jpg'
import './index.scss'

function Project1() {
  return (
   <>
   <CardGroup>
      <Card className="mycard" >
        <Card.Img className="cardImg" variant="top" src={GImg}  />
        <Card.Body>
          <Card.Title className="cardHeader">Guardian Angel</Card.Title>
          <Card.Text className="cardText">
          This project “Guardian Angel” is aimed to seek help from the near and dear ones under the situation of threat to one’s life. Mainly made for women travelling during late night or passing by some crucial areas where one cannot get help easily.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <a href = "/"> <small className="gitLink">View Project</small> </a>
        </Card.Footer>
      </Card>


      <Card className="mycard" style={{background: "linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080)"}} >
        <Card.Img variant="top" src={siriImg} />
        <Card.Body>
          <Card.Title className="cardHeader">My SiRi</Card.Title>
          <Card.Text className="cardText">
            Basically it's a clone of SIRI, which I made in python with the help of some voice recognition libraries like pyttsx3.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
        <a href = "/about"> <small className="gitLink">View Project</small> </a>
        </Card.Footer>
      </Card>
     
      </CardGroup>

   </>
  )
}

export default Project1
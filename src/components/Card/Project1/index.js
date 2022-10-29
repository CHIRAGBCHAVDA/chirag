import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import GImg from '../../../assets/images/guardianAngel.png'
import siriImg from '../../../assets/images/siriImg.jpg'
import CollectorDesk from'../../../assets/images/CollectorDesk.jpg'
import './index.scss'

function Project1() {
  return (
   <>
   <div className='card-container' style={{display: "grid", gridAutoRows: "auto",textAlign:"center"}}>
   <Card className="mycard" >
        <Card.Img className="cardImg" variant="top" src={CollectorDesk} style={{width:"30rem",height:"200px"}}/>
        <Card.Body>
          <Card.Title className="cardHeader">Collector's Desk</Card.Title>
          <Card.Text className="cardText">
          Advanced Organizational react based application which can be helpful to Collector of Ahmedabad to monitor the individual department's complaint and progress of citizen's request as a part of 36 Hour long Hackathon by Gov. Of India.<br/>
          Achieved the best project and problem solver award and also project got published in News Papers. 🤩 <br/>
          I played the role of Leader in this project.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <a href = "/about"> <small className="gitLink">View Project</small> </a>
        </Card.Footer>
      </Card>

    <div className='last-two-div' style={{}}>
      <div>
      <Card className="mycard"style={{height:"456px"}}>
        <Card.Img className="cardImg" variant="top" src={GImg}  />
        <Card.Body>
          <Card.Title className="cardHeader">Guardian Angel</Card.Title>
          <Card.Text className="cardText">
          This project “Guardian Angel” is aimed to seek help from the near and dear ones under the situation of threat to one’s life. Mainly made for women travelling during late night or passing by some crucial areas where one cannot get help easily.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
          <a href = "https://github.com/CHIRAGBCHAVDA/Guardian-Angel"> <small className="gitLink">View Project</small> </a>
        </Card.Footer>
      </Card>
      </div>

      <div>
      <Card className="mycard" style={{height:"456px"}} >
        <Card.Img className="cardImg" variant="top" src={siriImg} />
        <Card.Body>
          <Card.Title className="cardHeader">My SiRi</Card.Title>
          <Card.Text className="cardText">
            Basically it's a clone of SIRI, which I made in python with the help of some voice recognition libraries like pyttsx3.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
        <a href = "https://github.com/CHIRAGBCHAVDA/My-Siri" style={{width:"inherit"}}> <small className="gitLink">View Project</small> </a>
        </Card.Footer>
      </Card>
      </div>
      
    </div>
    

   </div>
   {/* <CardGroup className='d-flex'>
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

      <Card className="mycard mycard3">
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
      </Card> */}


      
     

   </>
  )
}

export default Project1
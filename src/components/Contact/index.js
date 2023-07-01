import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {PublicKey,ServiceId,TemplateId} from '../../Private/email.credentials.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const [loading, setLoading] = useState(false);
    const refForm = useRef()
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    

   const sendEmail = async(e) => {
        e.preventDefault()
        setLoading(true);
        try {
            await emailjs.sendForm(ServiceId, TemplateId, refForm.current, PublicKey);
            // Hide loader
            setLoading(false);
            toast.success("Message Successfully sent!");
        } catch (error) {
            // Hide loader
            setLoading(false);
            toast.error("Failed to send the message. Please try again.");
        }

    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone '>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15}
                        />
                    </h1>
                    {loading && <Loader type="pacman" style={{ position: "absolute", left: "5%", top: '5%' }} />}
                    <p>
                        As a software engineer, I believe that technology represents unlimited possibilities. I find working in technology to be a rewarding career that allows me to learn new skills every day and use them to create unique softwares that transport users to distant worlds. Ultimately, I plan to become a senior software developer, and this position can help me develop the skills for that position.
                    </p>
                    <p>
                        If you have other request or question, don't hesitate to contact me using below form either. Have a great day ahead!!
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li >
                                    <input type="text" name="subject" placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name="message" required>

                                    </textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>

                </div>
                <div className='info-map'>
                    Chirag Chavda,
                    <br />
                    Ahmedabad,Gujarat <br />
                    India
                </div>

                <div className='map-wrap'>



                    <MapContainer center={[23.0225, 72.5714]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[21.7645, 72.1519]}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>


            <Loader type='pacman' />
        </>
    )
}
export default Contact
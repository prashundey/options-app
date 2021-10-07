import React, { useState } from 'react'
import "./ProfileCard.css"
import pic from "../images/headshot.jpeg"
import { SocialIcon } from 'react-social-icons'
import { Col, Container, Offcanvas, Row } from 'react-bootstrap'
import {SiMinutemailer} from 'react-icons/si'
import {HiOutlineMail} from 'react-icons/hi'

export class ProfileCard extends React.Component {
    render() {
        return (
            <div className="container mt-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="profile-card p-3 py-4">
                            <div className="text-center"> 
                                <img src={pic} width="100" className="rounded-circle" /> 
                            </div>

                            <div className="text-center mt-3">
                                <h3 className="mt-2 mb-0">Prashun Dey</h3>

                                <div className="description px-4 mt-1">
                                    <p className="fonts">Applied Math & Statistics Graduate Exploring Tech</p>
                                </div>
                                
                                <ul className="social-list">
                                    <li><SocialIcon url="https://www.linkedin.com/in/prashun-dey/"
                                        target="_blank"
                                        bgColor="#0077b5" /></li>
                                    <li><SocialIcon url="https://github.com/prashundey"
                                        target="_blank"
                                        bgColor="white" /></li>
                                </ul>

                                <div>
                                    <ContactButton/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function ContactButton() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button className="btn contact px-4" onClick={handleShow}>
            Contact <HiOutlineMail/>
        </button>
        <Offcanvas className="contact-canvas"show={show} onHide={handleClose} placement={'bottom'}>
        <Container> 
            <Row>
                <Col xs={12}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title> <SiMinutemailer/> Feel free to reach me at...
                            
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <h6> prashun1999@gmail.com</h6>

                    </Offcanvas.Body>
                </Col>    
            </Row>
        </Container>   
        </Offcanvas>
      </>
    );
  }
  
  
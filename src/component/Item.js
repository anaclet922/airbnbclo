import logo from '../logo.svg';
import airbnb_logo from '../airbnb.png';
import partyImg from '../party.jpg';
import painting from '../paint.jpg';
import image1 from '../background1.webp';
import profileImg from '../profile.webp';

import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Nav from './Nav';
import imageItemI from '../imageItemI.jpg';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import { faBars, faUser, faStar, faHeart, faRssSquare, faGift, faShareAlt } from '@fortawesome/free-solid-svg-icons'

function Item (){
    return (
        <Router>
            <Container style={{ marginTop: "30px" }}>
                <Row>
                    <Col md={12}>
                        <a href="#" style={{ color: "#000" }}>All online experience</a>
                        <br/>
                        <br/>
                        <FontAwesomeIcon icon={faRssSquare} /> ONLINE EXPERIENCE
                        <br/>
                        <span style={{ fontSize: "25px", fontWeight: 600, marginTop: "30px", marginBottom:"30px" }}>
                            Living Room Legends Scavengers Hunt Game
                        </span>
                        <br/>
                        <span>
                            <FontAwesomeIcon icon={faStar} /> . Austin, United States . Part of Field Trips Online Experiences
                        </span>

                        <span className={"float-right "}>
                            <span>
                                <FontAwesomeIcon icon={faGift} /> Gift
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faShareAlt} /> Share
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faHeart} /> Save
                            </span>
                        </span>
                    </Col>
                </Row>
                <Row style={{ marginTop:"25px" }}>
                    <Col md={12}>
                        <Image src={imageItemI} className={"imageItemI"}/>
                    </Col>
                </Row>
                <br/>

                <Row>
                    <Col md={8}>
                        <Row>
                            <Col md={8} xs={4}>
                                <span style={{ fontSize: "22px", fontWeight: 600 }}>
                                    Online experience hosted by Kat
                                    <br/>
                                    <span style={{ fontSize: "13px" }}>60 mins · Hosted in English and Spanish</span>
                                </span>
                            </Col>
                            <Col md={4} xs={4}>                                
                                <Image src={profileImg} className={"float-right"} style={{ width: "60px", height: "60px", borderRadius: "50%" }}/>
                            </Col>
                        </Row>
                                
                        <hr/>

                                
                    </Col>
                    <Col md={4}>
                        <div className={"shadow-lg"} style={{ borderRadius:"15px", width: "100%", padding: "25px", border: "1px solid #D7D7D7" }}>
                            <p>
                                <span style={{ fontSize: "17px", fontWeight:"bold" }}>From $12</span> / person<br/>
                                <a href="#" style={{textDecoration: "underline", color: "black", opacity: 0.6}}>Show  all prices</a>
                            </p>

                            <div style={{ border: "1px solid #D7D7D7",borderRadius: "15px" }}>
                                <table className={"tableT"}>
                                    <tr>
                                        <td><span>DATES</span><br/><span>Add dates</span></td>
                                        <td style={{ borderLeft: "1px solid #D7D7D7" }}><span>Guests</span><br/><span>1 guest</span></td>
                                    </tr>
                                </table>
                            </div>

                            <Row style={{ marginTop: "30px" }}>
                                <Col md={8} xs={6}>
                                    <p style={{fontSize: "13px"}}>
                                        <b>Mon, Jun 7</b> <br/>
                                        <span>12:00 AM - 1:00 AM(CAT)</span>
                                    </p>
                                </Col>
                                <Col md={4} xs={6} style={{fontSize: "13px"}}>
                                    <b>$12</b> / person<br/>
                                    <Button variant="secondary" style={{fontSize: "13px", borderRadius: "13px"}}>Sold out</Button>
                                </Col>
                            </Row>
                            <hr/>
                            <Row style={{ marginTop: "30px" }}>
                                <Col md={8} xs={6}>
                                    <p style={{fontSize: "13px"}}>
                                        <b>Mon, Jun 7</b> <br/>
                                        <span>12:00 AM - 1:00 AM(CAT)</span>
                                    </p>
                                </Col>
                                <Col md={4} xs={6} style={{fontSize: "13px"}}>
                                    <b>$12</b> / person<br/>
                                    <Button variant="danger" style={{fontSize: "13px", borderRadius: "13px", backgroundColor:"#FE375D"}}>Choose</Button>
                                </Col>
                            </Row>
                            <hr/>
                            <Row style={{ marginTop: "30px" }}>
                                <Col md={8} xs={6}>
                                    <p style={{fontSize: "13px"}}>
                                        <b>Mon, Jun 7</b> <br/>
                                        <span>12:00 AM - 1:00 AM(CAT)</span>
                                    </p>
                                </Col>
                                <Col md={4} xs={6} style={{fontSize: "13px"}}>
                                    <b>$12</b> / person<br/>
                                    <Button variant="danger" style={{fontSize: "13px", borderRadius: "13px", backgroundColor:"#FE375D"}}>Choose</Button>
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={12}>
                                    <Button style={{ backgroundColor: "#fff",color: "black", fontWeight: 600,padding: "5px", border: "1px solid #000", borderRadius:"13px" }} className={"btn btn-block"}>See more dates</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>


                </Row>


                <br/><br/>
            </Container>
        </Router>
    );
}
  
export default Item;
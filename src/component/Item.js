import logo from '../logo.svg';
import airbnb_logo from '../airbnb.png';
import partyImg from '../party.jpg';
import painting from '../paint.jpg';
import image1 from '../background1.webp';

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
            </Container>
        </Router>
    );
}
  
export default Item;
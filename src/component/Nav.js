import '../App.css';

import logo from '../logo.svg';
import airbnb_logo from '../airbnb.png';
import partyImg from '../party.jpg';
import painting from '../paint.jpg';
import image1 from '../background1.webp';


import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';
  
import { faBars, faUser, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

function Nav() {
    return (
        <Router>
            <Navbar className={"shadow-lg"}>
            <Container className={"my_nav"}>
            <Navbar.Brand href="/">
                <Image src={ airbnb_logo } className={"logo"} />
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text style={{ marginRight: "25px" }}>
                <a href="/item" className={"boldTxt"}>Go to other page</a>
                </Navbar.Text>
                <Navbar.Text>
                <a href="#login" className={"boldTxt"}>Become a host</a>
                </Navbar.Text>
                <Dropdown>
                <Dropdown.Toggle className={"dropDownTop"} id="dropdown-basic">
                    <FontAwesomeIcon icon={faBars} />
                    <FontAwesomeIcon icon={faUser} style={{ marginLeft: "15px" }}/>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </Router>
    );
}


export default Nav;
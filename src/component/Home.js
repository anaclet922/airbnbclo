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


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import { faBars, faUser, faStar, faHeart } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
      <Router>
    <div className={"App"}>

      <Container>
          <Row className={"rightColumn"}>
              <Col md={3} className={"HomeTop"}>
                 <h1 className={"fontH1"}>
                    Online Experiences
                 </h1>
                 <p>
                  Find unique activities led by one-of-a-kind hosts — all without leaving home.
                 </p>
              </Col>
              <Col md={9}>

              </Col>
          </Row>
      </Container>

      <hr/>
      <Container>
          <h3 className={"boldTxt"} style={{ marginTop: "30px", marginBottom: "30px" }}>Celebrate Pride around the world</h3>
          <Row className={"filterRow"}>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
              <Col md={2} xs={6} className={"cardCol"}>
                  <Image src={ partyImg } className={"cardImg"} />
                  <br/>
                  
                    <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                    4.6 (30)
                    <span className={"locationTxt"}>
                       . Rwanda
                  </span>
                  <p>
                    Pride Drag Bingo with Live Shows
                    <br/>
                    <b>From $28</b> / person
                  </p>
              </Col>
          </Row>

          <h3 className={"boldTxt"} style={{ marginTop: "30px", marginBottom: "30px" }}>Celebrate Pride around the world</h3>
          <Row>
              <Col md={4}>
                <div className={"card flex-row flex-wrap"} id="customCard">
                {/* <div className={"card-header border-0"}>
                </div> */}
                  <div className={"card-body px-2 py-2"}>
                      <img src={ painting } className={"imageInCard"} alt=""/>
                      <div className={"cardIconRight"}>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className={"cardTxtRight"}>
                          <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                          4.6 (30)
                          <span className={"locationTxt"}>
                            . Rwanda
                          </span>
                          <p>
                            Pride Drag Bingo with Live Shows
                            <br/>
                            <b>From $28</b> / person
                          </p>

                          <p className={"paraBordered"}>
                            <span>5:00 pm</span>
                            <span>6:00 pm</span>
                          </p>

                      </div>
                  </div>
                  <div className={"w-100"}></div>
                </div>
              </Col>
              <Col md={4}>
                <div className={"card flex-row flex-wrap"} id="customCard">
                {/* <div className={"card-header border-0"}>
                </div> */}
                  <div className={"card-body px-2 py-2"}>
                      <img src={ painting } className={"imageInCard"} alt=""/>
                      <div className={"cardIconRight"}>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className={"cardTxtRight"}>
                          <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                          4.6 (30)
                          <span className={"locationTxt"}>
                            . Rwanda
                          </span>
                          <p>
                            Pride Drag Bingo with Live Shows
                            <br/>
                            <b>From $28</b> / person
                          </p>

                          <p className={"paraBordered"}>
                            <span>5:00 pm</span>
                            <span>6:00 pm</span>
                          </p>

                      </div>
                  </div>
                  <div className={"w-100"}></div>
                </div>
              </Col>
              <Col md={4}>
                <div className={"card flex-row flex-wrap"} id="customCard">
                {/* <div className={"card-header border-0"}>
                </div> */}
                  <div className={"card-body px-2 py-2"}>
                      <img src={ painting } className={"imageInCard"} alt=""/>
                      <div className={"cardIconRight"}>
                        <FontAwesomeIcon icon={faHeart} />
                      </div>
                      <div className={"cardTxtRight"}>
                          <FontAwesomeIcon icon={ faStar} style={{ color: "#FF3B44", fontSize: "10px" }}/>
                          4.6 (30)
                          <span className={"locationTxt"}>
                            . Rwandas
                          </span>
                          <p>
                            Pride Drag Bingo with Live Shows
                            <br/>
                            <b>From $28</b> / person
                          </p>

                          <p className={"paraBordered"}>
                            <span>5:00 pm</span>
                            <span>6:00 pm</span>
                          </p>

                      </div>
                  </div>
                  <div className={"w-100"}></div>
                </div>
              </Col>
          </Row>

          <br/>
          <h3 className={"boldTxt"} style={{ marginTop: "30px", marginBottom: "30px" }}>New this week</h3>
          <Row>
              <Col md={6} style={{padding: "10px"}}>
                <div className={"mycontainer"}>
                  <Image src={ image1 } alt="Snow" style={{ width:"100%", borderRadius: "15px"}}/>
                  <div className={"bottom-left"}>                    
                    <a href="#" className={"show_all"}>Show all</a>
                  </div>
                  <div className={"top-left"}>   
                        Collection<br/>
                        <span style={{fontSize:"25px"}}>
                            Tour before you travel
                        </span>
                  </div>
                </div> 
              </Col>
              <Col md={6} style={{padding: "10px"}}>
                <div className={"mycontainer"}>
                  <Image src={ image1 } alt="Snow" style={{ width:"100%", borderRadius: "15px"}}/>
                  <div className={"bottom-left"}>                    
                    <a href="#" className={"show_all"}>Show all</a>
                  </div>
                  <div className={"top-left"}>   
                        Collection<br/>
                        <span style={{fontSize:"25px"}}>
                            Tour before you travel
                        </span>
                  </div>
                </div> 
              </Col>
          </Row>
          
      </Container>
      <p>lorem</p>
    </div>
    </Router>
  );
}

export default Home;

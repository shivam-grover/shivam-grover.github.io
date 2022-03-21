import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-7.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", textAlign: "left" }}>
              A little <span className="purple"> about </span> me.
            </h1>
            <p className="home-about-body">
              I am currently working as a Full-Stack Software Developer at Aeroleads.
              <br />
              <br />
              However my expertise and experience goes well beyond development. <br/><br/> I love getting my hands dirty in a variety of things, such as 

                <strong className="color-text"> Robotics</strong>, 
                
                <strong className="color-text"> Computer Vision and Deep Learning</strong>, 

                <strong className="color-text"> Game Development</strong>, 

                <strong className="color-text"> Building Simulations</strong>, 

                and 

                <strong className="color-text"> 3D Modelling </strong>. 

              <br />
              <br />

              I am a strong believer in building user-centric products and designing before coding (unless it's just for fun).

              <br/>

              {/*I love learning new technologies and applying my coding skills to automate the living hell out of everything.*/}

            </p>

            <div style={{ textAlign: "left", margin: "50px 0 0 0" }}>

              {/*SOCIAL ICONS*/}
              <ul className="home-about-social-links">
                
                <li className="social-icons">
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-resume-button"
                    style = {{ textDecoration: "none" }}
                  >
                    <CgFileDocument style={{ marginRight: "10px" }} />
                    <strong>Resume</strong>
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="mailto:shivumgrover@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaEnvelope />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://github.com/shivam-grover"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/shivam-grover/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>

            </div>


          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2}>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br/>
        <Row style={{ justifyContent: "left", paddingBottom: "10px", color: "white" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px", textAlign: "left" }}>
            My <strong className="purple">coding journey </strong>this year 
          </h1>
          <GitHubCalendar
            username="shivam-grover"
            blockSize={15}
            blockMargin={5}
            color="#c084f5"
            fontSize={16}
          />
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

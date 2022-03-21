import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to connect with me at <a href="mailto:shivumgrover@gmail.com" className="purple">shivumgrover@gmail.com</a>
            </p>
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
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
          </Col>
        </Row>
        <br/>
        <Row>
          <Col md="12" className="footer-copywright">
            <h3><a href="https://github.com/soumyajit4419" style={{ color: "#ffffff55" }}>Adapted from Soumyajit Behera's Portfolio</a></h3>
          </Col>
      </Row>
    </Container>
  );
}

export default Footer;

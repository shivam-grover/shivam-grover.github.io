import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main-1.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Projects from "../Projects/Projects";
import Awards from "../Awards/Awards";

import Type from "./Type";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am
                <strong className="main-name"> Shivam Grover</strong>
              </h1>
              <br/><br/><br/>
              <div style={{ padding: 0, textAlign: "left" }}>
                <h3>Coding is ubiquitous in my life and I use it for </h3>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20, margin: "10px 0 0 0" }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "550px" }}
              />
            </Col>
          </Row>

        </Container>
      </Container>
      {/*<hr style={{ color: "#ffffff55" }}></hr>*/}
      <Home2 />
      <Awards id="Awards" />
      <Projects id="Projects" />
    </section>
  );
}

export default Home;

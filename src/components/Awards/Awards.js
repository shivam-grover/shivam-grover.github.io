import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import SgIH from "../../Assets/Awards/SgIH1.jpg";
import SIH_Hardware from "../../Assets/Awards/SIH Hardware.jpg";
import Celestini from "../../Assets/Awards/PaulBaransCelestiniProject.JPG";
import SIHSW from "../../Assets/Awards/SIH Software.jpg";
import EYantra from "../../Assets/Awards/Eyantra.jpeg";

function Awards() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Awards </strong>worth mentioning.
        </h1>
        <p style={{ color: "white" }}>
          Here are a few major awards I received.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SgIH}
              isBlog={false}
              title="Singapore India Hackathon 2019"
              description="Awarded by the Prime Minister of India, Narendra Modi for Singapore India Hackathon 2019. We built a novel way for manufacturing non-reusable syringes and also created a deep-learning based computer vision system to detect any malpractices."
              link="https://sites.google.com/view/shivamgrover/awards/SgIH2019"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Celestini}
              isBlog={false}
              title="Paul Baran's Celestini Project, IIT Delhi"
              description="Awarded by Mrs. Padmasree Warrior (ex-CTO, Cisco and Motorola) for winning Paul Baran’s Young Scholar’s Celestini Prize India, 2019 @ IIT Delhi."
              link="https://sites.google.com/view/shivamgrover/awards/paul-barans-young-scholars-celestini-prize-india-2019-iit-delhi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EYantra}
              isBlog={false}
              title="E-Yantra, IIT Bombay"
              description="Awarded by Prof. Kavi Arya for winning e-Yantra 2018, a robotics competition @ IIT Bombay"
              link="https://sites.google.com/view/shivamgrover/awards/e-yantra-2018"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIH_Hardware}
              isBlog={false}
              title="Smart India Hackathon, Hardware Edition 2018"
              description="Awarded First Prize"
              link="https://sites.google.com/view/shivamgrover/awards/smart-india-hackathon-hardware-edition-2018"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SIHSW}
              isBlog={false}
              title="Smart India Hackathon, Software Edition 2018"
              description="Awarded by Akilur Rahman, CTO of ABB for winning Smart India Hackathon Software Edition 2018."
              link="https://github.com/shivam-grover/EazyCharge"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={""}
              isBlog={false}
              title="Other Awards"
              description=""
              list = {["Runner’s up, ML Sprint BVP", "Winner HackBVP 2.0", "Runner’s up, Build For India -Paytm Ideathon Awarded by the Vice President of Paytm", "Winner, NIEC Hackathon"]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Awards;

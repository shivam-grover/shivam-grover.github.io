import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { BiLinkExternal } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";

import eyantra from "../../Assets/Projects/Eyantra.gif";
import egocentric from "../../Assets/Projects/EgocentricToMesh.png";
import SIH_Hardware from "../../Assets/Projects/SIH Hardware.jpg";
import PoseTransfer from "../../Assets/Projects/SimultaneousPoseandAppearancestransfer.gif";
import PoseTransfer2 from "../../Assets/Projects/SimultaneousPoseandAppearancestransfer2.gif";
import PoseTransfer3 from "../../Assets/Projects/SimultaneousPoseandAppearancestransfer5.gif";
import PoseTransfer4 from "../../Assets/Projects/SimultaneousPoseandAppearancestransfer4.gif";

import SIHSW from "../../Assets/Projects/SIH Software.png";
import VisionAir from "../../Assets/Projects/VisionAir.png";
import BirdsEye from "../../Assets/Projects/BirdsEye.gif";
import SpacedOut from "../../Assets/Projects/SpacedOut.png";



function Projects() {
  return (
    <Container fluid className="project-section" id="Projects">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={SpacedOut} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>Spaced Out</Card.Title>

                <br/>

                <Card.Text style={{ textAlign: "justify" }}>
                  A rythm game built with Unity and C#. Used fast fourier transform to sync audio with the obstacles and objects in real time.
                </Card.Text>
                <div style={{ position:"absolute",
                             marginLeft:"40px",
                             bottom:"10px" }}>
                  <Button variant="primary" href={"playstore"} target="_blank">
                    <BiLinkExternal /> &nbsp;
                    {"View Project"}
                  </Button>
                  <Button variant="primary" href={"playstore"} target="_blank" style={{ margin:"0 0 0 10px"}}>
                    <AiFillAndroid /> &nbsp;
                    {"Play Store"}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={BirdsEye} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>Egocentric to bird's eye view for vehicles</Card.Title>
                <br/>

                <Card.Text style={{ textAlign: "justify" }}>
                  Proposed an approach to transfer the egocentric views from a vehicle (for example from a dashcam) into the bird's eye view of the environment around the vehicle.
                  <br/>
                  <br/>
                  <i>Advised by Dr. Vanita Jain</i>
                </Card.Text>
                <Button variant="primary" href={"https://play.google.com/store/apps/details?id=com.MinimalistOrnate.SpacedOut"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={PoseTransfer2} alt="card-img" />
              <Card.Img variant="top" src={PoseTransfer4} alt="card-img" />
              <Card.Img variant="top" src={PoseTransfer} alt="card-img" />

              <Card.Body style={{ marginBottom: "38px" }}>
                <Card.Title>Simultaneous Pose and Appearance transfer</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Devised a novel approach to achieve pose and appearance transfer simultaneously using only a single image of the person. Our model is trained in an adversarial manner using a cyclic consistency loss.
                  <br/><br/>
                  <i>Advised by <a href="https://sites.google.com/site/koteswarraojerripothula/" target="_blank">Dr. Koteswar Rao Jerripothula</a></i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={egocentric} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>3D reconstruction from egocentric cameras</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Devised a novel approach to reconstruct the mesh and the textures of the user's body from cameras installed under the VR headset. Our method makes use of the available methods for reconstruction by generating an intermediate hollistic view from the egocentric views.
                  <br/><br/>
                  <i>Advised by Dr. Vanita Jain</i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={VisionAir} alt="card-img" />
              <Card.Body style={{ marginBottom: "38px" }}>
                <Card.Title>VisionAir</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  Built a deep learning driven android application which can estimate the air quality (PM2.5 value) around you using a single image. Uses Federated Learning to improve the model’s performance while preserving the privacy of the users as the user base grows.
                  <br/>
                  Awarded by <b>Mrs. Padmasree Warrior</b> (ex-CTO, Cisco and Motorola) for winning Paul Baran’s Young Scholar’s Celestini Prize India, 2019 @ IIT Delhi. Our work was also featured on the Tensorflow Medium Blog.
                  <br/><br/>
                  <i>Advised by <a href="https://achowdhery.github.io/achowdhery-website/index.html" target="_blank">Dr. Aakanksha Chowdhery</a> (Google Brain, Tensorflow) and <a href="https://ee.iitd.ac.in/people/brijeshlall.html" target="_blank">Dr. Brejesh Lal</a> (IIT Delhi)</i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={eyantra} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>Thirsty Crow: Autonomous Robot</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  An autonomous line following bot that uses a path following algorithm to traverse. Using a camera at the top of the room, the bot and other artifacts on the arena weredetected and animated models were displayed on them using augmented reality.
                  <br/><br/>
                  <i>First Prize in e-Yantra 2018 @ IIT Bombay</i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={SIH_Hardware} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>Humanoid Nurse</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A humanoid robot to help nurses do muscle intensive tasks like lifting and turning patients by mimicking their actions. The nurse wears a vest embedded with motion sensors and the motion is refined and further sent to the humanoid
                  <br/><br/>
                  <i>First Prize in SIH 2018 Hardware Edition</i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="project-card">
            <Card className="project-card-view">
              <Card.Img variant="top" src={SIHSW} alt="card-img" />
              <Card.Body style={{ marginBottom: "28px" }}>
                <Card.Title>Dynamic Price Prediction for e-Vehicle Charging Stations</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  A machine learning model that outputs an optimal price for charging stations based on several parameters such as the time and the day, the number of cars in the station, traffic around the station, etc. Uses the YOLO object detector for detecting cars through survellience cameras. I also built an android application for manually adjusting the parameters and enabling personalization for the model.
                  <br/><br/>
                  <i>First Prize in SIH 2018 Software Edition</i>
                </Card.Text>
                <Button variant="primary" href={"playstore"} target="_blank" style={{ position:"absolute",
                                                                             marginLeft:"-100px",
                                                                             left:"50%",
                                                                             width:"200px",
                                                                             bottom:"10px" }}>
                  <BiLinkExternal /> &nbsp;
                  {"View Project"}
                </Button>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

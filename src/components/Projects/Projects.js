import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import indiFashion from "../../Assets/indiFashion.png";
import Bisnos from "../../Assets/bisnos ph.png";
import portfolio from "../../Assets/portfolio.png";
import YourAIPhotos from "../../Assets/yourai.png";
import btcpl from "../../Assets/btcplph.png";



function Projects() {
  return (
    <Container fluid className="project-section">
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
            <ProjectCard
             imgPath={indiFashion}
              isBlog={false}
              title="IndiFashion"
              description="Facilitated the online purchase of new Gen-Z fashion products through a user-friendly interface and seamless shopping experience"
              link="https://indifashion.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Bisnos}
              isBlog={false}
              title="Bisnos"
              description="Digital Services For Business, services that help you grow your business ."
              link="https://bisnos.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My portfolio website describes my experience and journey in my professional life"
              link="https://github.com/Deepak707/Deepak-Portfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={YourAIPhotos}
              isBlog={false}
              title="Your Ai Photos"
              description="To get your own AI created photos with your face and any outfit or background."
              link="https://youraiphotos.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={btcpl}
              isBlog={false}
              title="Btcpl"
              description="Curated a diverse range of products, emphasizing competitive pricing andsuperior quality, to cater to diverse consumer needs"
              link="https://btcpl.online/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

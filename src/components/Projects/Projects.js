import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import indiFashion from "../../Assets/indiFashion.png";
import docsumm from "../../Assets/docsumm.png";
import portfolio from "../../Assets/portfolio.png";
import inthevisuals from "../../Assets/inthevisuals.png";


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
              imgPath={docsumm}
              isBlog={false}
              title="DocSummarizer"
              description="Empowered users to summarize document content efficiently through thewebsite's functionality"
              link="https://github.com/Deepak707/Document-Summarizer"
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
              imgPath={inthevisuals}
              isBlog={false}
              title="Music Band Portfolio"
              description="It's a portfolio website for a music band showcasing its events, music, and the journey of shows and events"
              //link="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              //imgPath={}
              isBlog={false}
              title="Image Compressor"
              description="Curated a diverse range of products, emphasizing competitive pricing andsuperior quality, to cater to diverse consumer needs"
              //link="https://github.com/beebus/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

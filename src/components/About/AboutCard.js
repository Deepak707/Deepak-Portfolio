import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Deepak Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br />I'm a 4th-year student, pursuing a <a href="https://www.cuchd.in/engineering/">Bachelors degree in CSE at Chandigarh University</a>.
            <br />
            <br />
            <br />
            Apart from coding, these are some other activities that I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Manhwa Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Video Editing
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "
            In the symphony of digital routines, the mundane cadence of computer tasks finds resonance in the harmonious melodies of automation. Through the artistry of precise coding, the everyday humdrum is transfigured, allowing for a dance of efficiency and elegance upon the digital stage."{" "}
          </p>
          <footer className="blockquote-footer">Deepak Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

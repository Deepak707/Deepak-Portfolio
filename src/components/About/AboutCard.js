import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{textAlign: "justify"}}>
            Hi, I'm <span className="purple">Deepak Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br/>I'm a Full Time Freelancer Pass out in Bachelors degree in CSE
            at Chandigarh University.
            <br/>
            <br/>
            <br/>

            Services I Offers:
            <br/>
            <ul>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can create engaging product photos and videos using state of the art AI tools like
                image generation,
                text to speech, image extraction and other editing tools.
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can create hyper realistic photos of anyone in any setup and any outfit in bulk using
                the roop AI face model.
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I will manage your business’s social presence by generating and posting content on
                numerous platforms (like facebook, instagram, whatsapp channels, youtube reels, google web stories,
                twitter, etc). I will use the best hashtags and post everyday at the perfect time to ensure maximum
                reach.
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can create and manage your presence on social media and video streaming websites (like
                youtube, vimeo, dailymotion, etc) by creating beautiful and engaging content (both short and long form
                content) and posting it regularly with the most relevant hashtags, thumbnails and at the perfect time
                everyday to give you the highest viewership.
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can create automated messaging agent for whatsapp and instagram
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can create and manage your presence on dating apps by creating your attractive pictures
                in different outfits and locations and swiping on your behalf to give you the most matches.
              </li>
              <br/>
              <li className="about-activity">
                <ImPointRight/> I can design and develop your website to create a stunning online presence. From crafting
                visually appealing layouts to integrating interactive features, I ensure your site is both attractive
                and user-friendly. I'll optimize it for performance and SEO, and ensure it works seamlessly across all
                devices. Whether you need an e-commerce platform, a blog, or a portfolio, I'll deliver a professional
                and engaging website that meets your needs and enhances your brand's digital footprint.
              </li>

            </ul>

            <br/>
            <br/>
            <br/>
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

import "./about.style.css";
import {
  AboutTeamImg,
  AboutOurMissionImg,
  AboutOurStoryImg,
} from "../../assets";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main-container">
        <div className="about-main">
          <div className="about-main-text">
            <h2>About Us</h2>
            <p>
              We are an innovative company specializing in website and
              application development. Our passion for technology and commitment
              to quality allow us to create solutions that exceed our client's
              expectations. With a rich history and experience in the industry,
              our team of experts continuously follows the latest trends and
              technologies to ensure that our projects are always on the cutting
              edge industry standards.
            </p>
          </div>
          <AboutTeamImg />
        </div>
        <div className="about-main">
          <AboutOurMissionImg />
          <div className="about-main-text">
            <h2>Our Mission: Heliping Milions of Organizations Grow Better</h2>
            <p>
              Our mission is to help businesses of all sizes realize their full
              potential through cutting-edge digital products. Whether you need
              a modern website, an intuitive mobile application or a complex
              software system, we are here to turn your ideas into reality.
            </p>
          </div>
        </div>
        <div className="about-main">
          <div className="about-main-text">
            <h2>Our Story</h2>
            <p>
              From our humble beginnings, we have developed into a reliable
              partner for numerous clients around the world. Our path is marked
              by constant learning, adapting to new technologies and following
              the latest trends in the industry. We are proud of every project
              we have completed, from simple web pages to complex applications
              that solve the real problems of our users.
            </p>
            <p>
              Through the years, our mission has remained the same: to provide
              superior digital products that help businesses reach their full
              potential.
            </p>
          </div>
          <AboutOurStoryImg />
        </div>
      </div>
    </div>
  );
};

export default About;

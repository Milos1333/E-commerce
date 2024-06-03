import "./contact.style.css";
import { PhoneIconImg, LocationIconImg } from "../../assets";
import Button from "../../components/Button/Button";

const Contact = () => {
  return (
    <div className="contact-main-container">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in touch</h2>
          <p>
            Use our contact form all information requests or contact us directly
            using the contact information below.
          </p>
          <p>Feel free to get in touch with us via email or phone</p>
          <hr />
          <div className="contact-location">
            <LocationIconImg />
            <div className="location-details">
              <p>Our Office Location</p>
              <p>The Interior Design Studio Company</p>
              <p>The Courtyard, Al Quoz 1, Colorado, USA </p>
            </div>
          </div>
          <div className="contact-phone">
            <PhoneIconImg />
            <div className="phone-details">
              <p>Phone (Landline)</p>
              <p>+387 66/466-603</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Get started with a free quotation</h3>
          <div className="form-group">
            <label>Name</label>
            <input placeholder="Enter your Name" />
            <div className="form-emoji"></div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input placeholder="Enter a valid email address" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea placeholder="Enter your message"></textarea>
          </div>
          <div className="check-container">
            <div className="check">
              <span>&#10003;</span>
            </div>
            <p>
              I accept the <span>Terms of Service</span>
            </p>
          </div>
          <Button
            buttonText="Submit your request"
            backgroundColor="rgb(0, 255, 145);"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

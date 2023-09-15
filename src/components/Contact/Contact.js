import React from "react";
import "./Contact.css"; // Import the CSS file for Contact styling
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div style={{ height: "85vh" }}>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>Have questions or suggestions? Get in touch with us!</p>
        <div className="contact-info">
          {/* <p>Email: qsao2212@gmail.com</p>
          <p>Phone: 0941.697.009</p>
          <p>Address: 1234 Elm Street, City, Country</p> */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;

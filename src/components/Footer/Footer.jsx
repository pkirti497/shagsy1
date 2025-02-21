import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css"; // Import the CSS file

const FooterLinks = [
  { id: 1, title: "Privacy Policy", link: "/#privacy-policy" },
  { id: 2, title: "Terms of Service", link: "/#terms-of-service" },
  { id: 3, title: "Contact Us", link: "/#contact" },
];

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section company-details">
          <h1>Empowering Your Sexual Wellness - Confidently, Boldly, Uniquely.</h1>
        </div>

        <div className="footer-links-container">
          <div className="footer-section links">
            <h1>Links</h1>
            <ul>
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.link}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section social">
            <h1>Follow Us</h1>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

          <div className="footer-section trust">
            <h1>Trust</h1>
            <ul>
              <li>Certifications and Privacy Standards</li>
              <li>Encrypted Transactions</li>
              <li>Customer Testimonials</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shagsy. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="footer-logo-kasa" className="footer_img" />
      <p className="footer-text">Gulcan COSKUN | December, 2022</p>
    </footer>
  );
};

export default Footer;

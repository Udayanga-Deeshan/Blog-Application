import React from "react";
// import Logo from "../../img/logo.png";
import Logo from '../../img/my-logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
       Copyright 2024 <b>All Rights Reserved</b>.
      </span>
    </footer>
  );
};

export default Footer;
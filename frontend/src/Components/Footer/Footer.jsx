import React from "react";
import Logo from '../../img/Blog-logo.jpeg'
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
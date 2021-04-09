import React from "react";
import "./headerComponentStyle.scss";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";

export const HeaderComponent = () => (
  <header>
    <div class="logo">Creative Agency</div>
    <div class="toggle"></div>
    <div class="navigation">
      <ul>
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="services.html">Services</a>
        </li>
        <li>
          <a href="work.html">Work</a>
        </li>
        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>
      <div class="social-bar">
        <ul>
          <li>
            <a href="https://facebook.com">
              <img src="images/facebook.png" target="_blank" alt="" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <img src={twitter} target="_blank" alt="" />
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <img src={instagram} target="_blank" alt="" />
            </a>
          </li>
        </ul>
        <a href="mailto:you@email.com" class="email-icon">
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  </header>
);

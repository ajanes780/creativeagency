import React from "react";
import "./homeComponentStyle.scss";
import homeImage from "../../assets/home-img.jpg";
import { Link } from "react-router-dom";

export const HomeComponent = () => (
  <section class="home">
    <img src={homeImage} class="home-img" alt="" />
    <div class="home-content">
      <h1>
        We help to achieve <br />
        your goals.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo itaque nam
        saepe vero voluptatem vel fuga a eaque earum alias ipsam aspernatur
        culpa maxime laboriosam, impedit quae officiis consectetur
      </p>
      <Link to="/contact" class="btn">
        Get Started
      </Link>
    </div>
  </section>
);

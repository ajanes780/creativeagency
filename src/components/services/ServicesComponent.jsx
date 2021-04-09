import React from "react";
import image1 from "../../assets/001.png";
import image2 from "../../assets/002.png";
import image3 from "../../assets/003.png";
import image4 from "../../assets/004.png";
import image5 from "../../assets/005.png";
import image6 from "../../assets/006.png";

export const ServicesComponent = () => (
  <section>
    <div className="title">
      <h1>Services that we can help you with</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        iusto molestias accusamus rem nobis est, et laborum harum doloremque
        nemo non, minima quos totam labore maxime iste alias ut esse? Repellat
        eaque reiciendis laboriosam corporis fuga vero ratione veritatis
        numquam, libero magni voluptatum omnis molestiae officiis exercitationem
        qui quidem nam.
      </p>
    </div>
    <div className="services">
      <div className="service">
        <div className="icon">
          <img src={image1} alt="" />
        </div>
        <h2>Design</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
      <div className="service">
        <div className="icon">
          <img src={image2} alt="" />
        </div>
        <h2>Development</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
      <div className="service">
        <div className="icon">
          <img src={image3} alt="" />
        </div>
        <h2>SEO</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
      <div className="service">
        <div className="icon">
          <img src={image4} alt="" />
        </div>
        <h2>Marketing</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
      <div className="service">
        <div className="icon">
          <img src={image5} alt="" />
        </div>
        <h2>App Development</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
      <div className="service">
        <div className="icon">
          <img src={image6} alt="" />
        </div>
        <h2>Error Fixing</h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum omnis
        nemo sapiente in quidem sed dolores cumque! Ut, est aliquid!
      </div>
    </div>
  </section>
);

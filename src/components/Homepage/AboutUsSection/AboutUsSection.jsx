import React from "react"

import "./AboutUsSection.scss"
import Heading from "../../shared/Heading"
import Ticker from "./AnimatedNumbers"
import Lottie from "../Lottie/Lottie"
export default function AboutUsSection() {
  const aboutUs = [
    { id: 1, number: 10, text: "Industries Explored" },
    { id: 2, number: 70, text: "Digital Solutions Delivered" },
    { id: 3, number: 40, text: "Team of Experts" },
    //{ id: 4, heading: 9 / 10, text: "Projects Conducted Remotely" },
  ]
  return (
    <div className="about-us-section" id="about_us_section">
      <div className="container">
        <div className="row">
          <div
            className="col-md-8"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Heading variant="48">
              codeFulcrum in <br /> numbers!
            </Heading>
          </div>
          <div className="col-md-4"></div>
        </div>
        <div className="row g-4 mt-5">
          {aboutUs.map(item => {
            return (
              <div className="col-md-3 col-6 text-center" key={item.id}>
                <div className="d-flex align-items-center justify-content-center">
                  {" "}
                  <Ticker end={item.number} suffix="+" />
                </div>
                <div className="text">{item.text}</div>
              </div>
            )
          })}
          <div
            className="col-md-3 col-6 text-center"
            // data-aos="zoom-in"
            // data-aos-duration="1300"
          >
            <Heading variant="58" className="header">
              {" "}
              9/10
            </Heading>
            <div className="text">Projects Conducted Remotely</div>
          </div>
        </div>
      </div>
      <div className="about-us-arrow">
        {/* <img
          src="/about-us-arrow.svg"
          alt=""
          className="img-fluid"
          data-aos="zoom-in"
          data-aos-duration="1400"
          data-aos-delay="300"
        /> */}
        <Lottie />
      </div>
    </div>
  )
}

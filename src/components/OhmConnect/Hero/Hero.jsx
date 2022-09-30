import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"
import { OhmConnect } from "../SVGs"
import ProjectDesc from "../AboutProject/ProjectDesc"

export default function Hero({
  btnText,
  img,
  text,
  header,
  id,
  scroll,
  social,
}) {
  return (
    <div className="hero-bg-ohm-connect" id={id}>
      <div
        className="container position-relative"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
      >
        <div className="row pb-4">
          <div className="col-lg-9 col-sm-7 col-xs-12  hero-text-column-ohm-connect">
            <div className="d-flex header-bg">
              <OhmConnect />
            </div>
            <Heading variant="58" className="header text-uppercase">
              {header}
            </Heading>

            <p className="text">
              OhmConnect is on a mission to build North America’s largest
              Virtual Power Plant. Let's take a peek at what codeFulcrum has
              been doing as their companion on this journey!
            </p>
          </div>
          <ProjectDesc />
        </div>
        {!!social ? (
          <div className="social-icons-box">
            <div className="social-heading">Follow Us</div>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/company/codefulcrum/"
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img src="linkedin.svg" alt="" className="img-fluid" />
              </a>
              <a
                href="https://www.facebook.com/codeFulcrum/"
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img src="instagram.svg" alt="" className="img-fluid" />
              </a>
              <a
                href="https://www.upwork.com/ag/codefulcrum/"
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img src="facebook.svg" alt="" className="img-fluid" />
              </a>
            </div>
          </div>
        ) : null}
        {/* <a href={scroll} className="scroll-down">
          <div className="icon">
            <img src="/scroll-arrow.svg" alt="" className="img-fluid" />
          </div>
          <div className="text">SCROLL DOWN</div>
        </a> */}
      </div>
    </div>
  )
}

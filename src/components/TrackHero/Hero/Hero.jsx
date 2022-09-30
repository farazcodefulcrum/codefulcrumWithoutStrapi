import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"
import { TrackHero } from "../SVGs"
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
    <div
      className="hero-bg-track-hero"
      id={id}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <div className="container position-relative">
        <div className="row pb-4">
          <div className="col-lg-9 col-sm-7 col-xs-12  hero-text-column-trackhero">
            <div className="d-flex header-bg">
              <TrackHero />
            </div>
            <Heading variant="48" className="header text-capitilize">
              {header}
            </Heading>
            <p className="text">
              Discover how codeFulcrum enabled TrackHero to smoothly navigate
              through increasing traffic and strategize its product development
              with a user-centered approach.
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
        {/* <a href={scroll} className="scroll-down-global">
          <div className="icon ">
            <Scroll />
          </div>
          <div className="text">SCROLL DOWN</div>
        </a> */}
      </div>
    </div>
  )
}

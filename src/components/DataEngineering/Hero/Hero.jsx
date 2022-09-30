import React from "react"

import Heading from "../../shared/Heading"
import Button from "../../shared/Button"
import "./Hero.scss"
import { Box } from "@mui/material"
import { HeroWireDataEng } from "../SVGs"
import Scroll from "../../utils/Scroll"
export default function Hero({ header, text, btnText, social, scroll, id }) {
  return (
    <div
      className="hero-bg"
      id={id}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <div className="container position-relative">
        <div className="row pb-4">
          <div className="col-lg-12 hero-text-column">
            <div className="d-flex">
              <HeroWireDataEng />
              <p className="wire-header">Data Engineering</p>
            </div>
            <Heading variant="58" className="header">
              {header}
            </Heading>
            <div className="arrow-bg"></div>
            <Box className="hero-text-data-eng">{text}</Box>

            <Button text={btnText} variant="fill" href="/contact" />
          </div>
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
        <a href={scroll} className="scroll-down-global">
          <div className="icon ">
            <Scroll />
          </div>
          <div className="text">SCROLL DOWN</div>
        </a>
      </div>
    </div>
  )
}

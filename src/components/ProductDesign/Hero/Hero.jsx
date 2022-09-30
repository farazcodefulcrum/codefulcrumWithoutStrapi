import React from "react"

import Heading from "../../shared/Heading"
import Button from "../../shared/Button"
import "./Hero.scss"
import { Box } from "@mui/material"
import Scroll from "../../utils/Scroll"
import { HeroWire } from "../SVGs"
export default function Hero({
  header,
  header2,
  text1,
  text2,
  btnText,
  social,
  scroll,
  id,
}) {
  return (
    <div className="hero-bg" id={id}>
      <div className="container position-relative">
        <div className="row pb-4">
          <div
            className="col-lg-11 hero-text-column"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
          >
            <div className="d-flex">
              <HeroWire />
              <p className="wire-header">Product Design</p>
            </div>
            <Heading variant="58">{header}</Heading>

            <Box className="hero-text" mt={-2}>
              {text1}
            </Box>
            <Box className="hero-text" mt={-2}>
              {text2}
            </Box>
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

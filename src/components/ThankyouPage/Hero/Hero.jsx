import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"
import { HeroWireDataEng } from "../SVGs"
import { Box } from "@mui/system"
export default function Hero({ btnText, img, text, header, id, social }) {
  return (
    <div className="hero-bg" id={id}>
      <div className="container position-relative">
        <div className="row pb-4">
          <div className="col-lg-7 col-sm-12 col-xs-12  hero-text-column-thanku">
            <Heading variant="58" className="header">
              {header}
            </Heading>
            <Box className="hero-text-thanku" mt={-2}>
              {text}
            </Box>
            <br></br>
            <Box mb={{ sm: 5, xs: 4 }}>
              <Button text={btnText} variant="fill" href="/portfolio" />
            </Box>
          </div>
          <div className="col-lg-5  col-sm-12  col-xs-12  mt-sm-0 mt-5">
            <div className="hero-img-thanku position-relative">
              <img src={img} alt="" className="img-fluid display-tablet-none" />
            </div>
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

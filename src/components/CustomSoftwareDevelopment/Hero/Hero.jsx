import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"
import { HeroWireDataEng } from "../SVGs"
import { Box } from "@mui/system"
import Scroll from "../../utils/Scroll"

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
      className="hero-bg"
      id={id}
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-duration="1000"
    >
      <div className="container position-relative">
        <div className="row pb-4">
          <div className="col-lg-9 col-sm-7 col-xs-12  hero-text-column-cs">
            <div className="d-flex">
              <HeroWireDataEng />
              <p className="wire-header">Custom Software Development</p>
            </div>
            <Heading variant="58" className="header">
              {header}
            </Heading>
            <Box className="hero-text-cs" mt={-2}>
              {text}
            </Box>

            <Button text={btnText} variant="fill" href="/contact" />
          </div>
          <div className="col-lg-3  col-sm-5  col-xs-12  mt-sm-0 mt-5">
            <div className="hero-img-cs position-relative">
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
        <a href={scroll} className="scroll-down-custom-software">
          <div className="icon ">
            <Scroll />
          </div>
          <div className="text">SCROLL DOWN</div>
        </a>
      </div>
    </div>
  )
}

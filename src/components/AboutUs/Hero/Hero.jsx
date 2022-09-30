import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"
import Text from "../../shared/Text"
import { Box } from "@mui/system"
import Scroll from "../../utils/Scroll"
import ClientSection from "../ClientSection"
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
    <div className="hero-bg-about-us" id={id}>
      <div className="container position-relative">
        <div className="row pb-4">
          <div
            className="col-lg-12  hero-text-about"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="top-center"
          >
            <div className="header-bg">
              <Heading variant="58" className="header">
                {header}
              </Heading>
            </div>
            <Box px={{ md: 20, sm: 8, xs: 0 }}>
              <Text className="text">
                codeFulcrum is a software development company located in USA and
                Pakistan. We are committed to developing innovative software
                solutions for Startups, SMEs and Enterprises all across the
                globe, helping them grow their businesses using latest
                technology solutions.
              </Text>
            </Box>
            {/* <div className="d-flex justify-content-center btn-hero">
              <Button text={btnText} variant="fill" href="/contact" />
            </div> */}
          </div>
        </div>
        <ClientSection />

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
        <a href={scroll} className="scroll-down-about">
          <div className="icon ">
            <Scroll />
          </div>
          <div className="text">SCROLL DOWN</div>
        </a>
      </div>
    </div>
  )
}

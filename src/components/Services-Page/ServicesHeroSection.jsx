import React from "react"

import Button from "../shared/Button"
import Heading from "../shared/Heading"
import { Parallax } from "react-parallax"
import Scroll from "../utils/Scroll"
export default function Hero({
  btnText,
  img,
  children,
  text,
  social,
  scroll,
  id,
}) {
  return (
    <div className="services-hero">
      <div className="hero-bg" id={id}>
        <div className="container position-relative">
          <div className="row">
            <div
              className="col-lg-12 hero-text-column"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="bottom-bottom"
            >
              <Heading variant="58"> {children} </Heading>
              {!!text ? <div className="hero-text">{text}</div> : null}
              <div className="button">
                <Button text={btnText} variant="fill" href="/contact" />
              </div>
            </div>
            <div className="col-lg-12 mt-sm-0 mt-5">
              {/* <div className="main-wrapper-hero-img">
                <div className="services-side-img">
                  <img
                    src={img}
                    alt=""
                    className="img-fluid display-tablet-none"
                  />
                </div> */}
              <Parallax
                blur={0}
                bgImage={img}
                bgImageAlt="the cat"
                strength={100}
                className="parallex"
              ></Parallax>
              {/* </div> */}
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
          <a href={scroll} className="scroll-down-services">
            <div className="icon ">
              <Scroll />
            </div>
            <div className="text">SCROLL DOWN</div>
          </a>
        </div>
      </div>
    </div>
  )
}

import React from "react"

import Button from "../Button/Button"
import Heading from "../Heading"
import "./Hero.scss"
import { StaticImage } from "gatsby-plugin-image"
import Scroll from "../../utils/Scroll"
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
    <div className="hero-bg" id={id}>
      <div className="container position-relative">
        <div className="row pb-4">
          <div className="col-lg-6 hero-text-column">
            <Heading variant="58"> {children} </Heading>
            {!!text ? <div className="hero-text">{text}</div> : null}
            <Button text={btnText} variant="fill" href="/contact" />
          </div>
          <div className="col-lg-6 mt-sm-0 mt-5">
            <div className="hero-img position-relative">
              <StaticImage
                src="../../../../static/homepage/hero-img.png"
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt="img"
              />
            </div>
          </div>
        </div>
        {!!social ? (
          <div
            className="social-icons-box"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="1000"
          >
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
                href="https://instagram.com/codefulcrum_?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="social-icon"
                rel="noreferrer"
              >
                <img src="instagram.svg" alt="" className="img-fluid" />
              </a>
              <a
                href="https://www.facebook.com/codeFulcrum/"
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

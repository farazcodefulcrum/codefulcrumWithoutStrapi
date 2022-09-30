import React from "react"

import Button from "../../shared/Button"
import Heading from "../../shared/Heading"
import "./Hero.scss"

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
    <div className="hero-bg-portfolio" id={id}>
      <div className="container position-relative">
        <div
          // className="row pb-4"
          className="row "
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="1000"
        >
          <div className="col-lg-10  hero-text-portfolio ">
            <Heading variant="58"> {children} </Heading>
            {!!text ? <div className="hero-text">{text}</div> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

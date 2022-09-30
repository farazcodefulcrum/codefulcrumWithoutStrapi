import React from "react"
import "./Leadership.scss"
import { Box } from "@mui/system"
import Text from "../../shared/Text"
function PositionedCircles() {
  return (
    <div className="leadership-bg d-flex justify-content-center">
      <div>
        <div
          className="header"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1000"
        >
          <Text className="text-justify">
            Together, we work hard, we laugh, we brainstorm; we challenge
            ourselves, learn new skills and do the kind of work that adds up to
            something meaningful. codeFulcrum is a happy workplace and you’ll be
            interacting with smart, ambitious, fun, and motivated engineers,
            designers, creators & managers day-in and day-out.
          </Text>
        </div>
      </div>

      <div
        className="circle-1"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          1000 <span className="plus">+</span>
        </p>
        <p className="text">Cups of coffee</p>
      </div>
      <div
        className="circle-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          100 <span className="plus">+</span>
        </p>
        <p className="text">Sleepless days</p>
      </div>
      <div
        className="circle-3"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          40 <span className="plus">+</span>
        </p>
        <p className="text">Sports tournaments</p>
      </div>
      <div
        className="circle-4"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          20 <span className="plus">+</span>
        </p>
        <p className="text">Team penalties</p>
      </div>
      <div
        className="circle-5"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          1500 <span className="plus">+</span>
        </p>
        <p className="text">Hours of internal trainings</p>
      </div>
      <div
        className="circle-6"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="bottom-bottom"
      >
        <p className="header">
          19 <span className="plus">+</span>
        </p>
        <p className="text">Movie nights</p>
      </div>
    </div>
  )
}

export default PositionedCircles

import React from "react"
import "./AboutUs.scss"
import { Box } from "@mui/material"
import Heading from "../shared/Heading"
function UsersWorldwide() {
  return (
    <>
      <div className="users-worldwide" id="users">
        <div
          className="container header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-anchor-placement="bottom-bottom"
        >
          <Heading variant="48">
            We've built solutions for 35M+ users worldwide
          </Heading>
        </div>
      </div>
      <div className="bottom-box"></div>
    </>
  )
}

export default UsersWorldwide

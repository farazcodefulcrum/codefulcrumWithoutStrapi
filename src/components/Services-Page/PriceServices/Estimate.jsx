import React from "react"
import Heading from "../../shared/Heading"
import "./PriceServices.scss"
import { Box } from "@mui/material"
import Button from "../../shared/Button"
function Estimate() {
  return (
    <div className="estimate-wrapper">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
        data-aos-duration="1000"
      >
        <div className="d-flex justify-content-center">
          <Heading variant="48" className="header">
            Get an estimate now free of cost
          </Heading>
        </div>

        <p className="text">
          Drop us a message regarding your project, we will schedule a meeting
          to gather requirements and generate estimates for you within 48hrs.{" "}
        </p>
        <Box mt={2} className="d-flex justify-content-center btn">
          <Button
            href="/contact"
            clr="white"
            text="GET A QUOTE IN 48HRS"
            border="#183266"
            variant="fill"
            className="nav-btn mt-2"
          />
        </Box>
      </div>
    </div>
  )
}

export default Estimate

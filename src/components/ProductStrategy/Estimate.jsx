import React from "react"
import Heading from "../shared/Heading"
//import "./PriceServices.scss"
import { Box } from "@mui/material"
import Button from "../shared/Button"
import "./ProductStrategy.scss"
function Estimate() {
  return (
    <div className="estimate-wrapper-ps">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-anchor-placement="top"
        data-aos-duration="1000"
        data-aos-delay="450"
      >
        <div>
          <Heading variant="48" className="header">
            Let’s choose the best technology for your business
          </Heading>
        </div>

        <p className="text">
          Already know what tech stack you want to use in your next app? Great!
          Still not quite sure? Let us advise you on the best solution for your
          unique case.
        </p>
        <Box mt={2} className="">
          <Button
            href="/contact"
            clr="white"
            text="TALK TO US"
            bgClr="#183266"
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

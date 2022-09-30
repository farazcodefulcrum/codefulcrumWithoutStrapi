import React from "react"
import "./EngineeringBenefits.scss"
import { Grid } from "@mui/material"
import Heading from "../../shared/Heading"
import Header from "./Header"
import WorkSwiper from "../WorkSwiperDataEng"
import { Box } from "@mui/system"
function EngineeringServices() {
  return (
    <Box mb={6}>
      <Header />
      <div className="engineering-benefits">
        <div className="container">
          <WorkSwiper />
        </div>
      </div>
    </Box>
  )
}

export default EngineeringServices

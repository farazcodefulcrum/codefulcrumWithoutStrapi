import React from "react"
import { Grid } from "@mui/material"
import "./PartnerSection.scss"
import DataColumn from "./DataColumn"
function PartnersSection() {
  return (
    <>
      <div className="partner-section-wrapper">
        <div className="background-img">
          <Grid
            container
            className="container"
            pt={{ md: 24, sm: 14, xs: 8 }}
            justifyContent="center"
          >
            <Grid item>
              <div
                className="header"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                data-aos-delay="250"
              >
                Are you looking for a trustworthy partner who will incorporate
                the best product design practices into your project?
              </div>
            </Grid>
            <Grid
              item
              className="d-flex justify-content-center"
              mt={{ md: 8, sm: 5, xs: 3 }}
            >
              <div
                className="sub-header"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
                data-aos-delay="250"
              >
                Here are some of the reasons why we'll make an excellent match!
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <DataColumn />
    </>
  )
}

export default PartnersSection

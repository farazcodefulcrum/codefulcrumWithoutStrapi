import React from "react"
import { Grid } from "@mui/material"
import Tabs from "./Tabs"
import "../ProductDesign.scss"
import Heading from "../../shared/Heading"
function DesignTabs() {
  return (
    <div className="design-tabs">
      <div className="container background-img">
        <Grid container pt={{ md: 19, sm: 16, xs: 10 }}>
          <Grid item md={4}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              <Heading variant="48">Here’s how we design your vision </Heading>
            </div>
          </Grid>
          <Grid item md={3}></Grid>
          <Grid item md={5}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1500"
            >
              Through inventive and intuitive design, we allow your brand to
              stand out from the crowd. We leverage your goals to craft a
              creative vision.{" "}
            </div>
          </Grid>
        </Grid>
        <Tabs />
      </div>
    </div>
  )
}

export default DesignTabs

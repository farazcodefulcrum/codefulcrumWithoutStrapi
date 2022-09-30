import React from "react"
import { Grid } from "@mui/material"
import "./ProductDesign.scss"

function DesignSprints() {
  return (
    <div className="design-sprint">
      <div className="container">
        <Grid container>
          <Grid item md={6} sm={10}>
            <div
              className="text"
              data-aos="fade-up"
              data-aos-anchor-placement="bottom"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Design Sprints are critical for kicking off any project and
              ensuring that expectations are aligned from the beginning. A
              Design Sprint requires active participation from both parties to
              ensure that your business goals and end-user expectations are
              prioritized.{" "}
            </div>
          </Grid>
          <Grid item md={6} sm={12}></Grid>
        </Grid>
        <div className="d-flex  align-baseline">
          <div
            className="link"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            Learn more on design sprints
          </div>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="bottom"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img
              src="/productStrategy/right-arrow.png"
              className="arrow-icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignSprints

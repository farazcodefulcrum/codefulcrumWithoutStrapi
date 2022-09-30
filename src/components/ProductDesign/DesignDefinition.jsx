import React from "react"
import { Grid } from "@mui/material"

import "./ProductDesign.scss"
function DesignDefinition() {
  return (
    <div className="design-definition">
      <Grid container className="container">
        <Grid item md={4}></Grid>
        <Grid item md={8} pl={{ sm: 0, md: 6.5, xs: 0 }}>
          <div
          // data-aos="fade-up"
          // data-aos-anchor-placement="center-bottom"
          // data-aos-duration="1500"
          >
            <p className="grid-content">
              Are you concerned about the design of your app or unsure if it is
              a good fit for the existing markets?
            </p>
            <p className="text">
              We've got you covered! You can be confident that your product will
              fit right in thanks to our product design and strategy consulting
              services.
            </p>
            <p className="text">
              When it comes to UI/UX design or web and mobile app development,
              we don't have a magic formula at codeFulcrum. Instead, we approach
              each case on its own because we want you to get exactly what you
              want with unique features, out-of-the-box solutions, and
              non-standard user interfaces.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default DesignDefinition

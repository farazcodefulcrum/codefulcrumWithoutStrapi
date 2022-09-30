import React from "react"
import "./EngineeringBenefits.scss"
import { Grid } from "@mui/material"
import Text from "../../shared/Text"
import Heading from "../../shared/Heading"
function Header() {
  return (
    <Grid
      container
      mt={{ md: 18, sm: 12, xs: 8 }}
      className="container benefits-wrapper"
    >
      <Grid item md={5} sm={5} xs={12}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Heading variant="48">
            Benefits of data engineering for your business
          </Heading>
        </div>
      </Grid>
      <Grid
        item
        md={7}
        sm={7}
        xs={12}
        className="m-auto"
        pl={{ md: 21, sm: 8, xs: 0 }}
      >
        <div data-aos="fade-up" data-aos-duration="1000">
          <Text className="text">
            We guide you through the entire process, working closely with your
            company, its challenges, strategy, and any concerns you may have. We
            can provide a complete end-to-end solution wherever you are. Here
            are some of the ways it can benefit your business.
          </Text>
        </div>
      </Grid>
    </Grid>
  )
}

export default Header

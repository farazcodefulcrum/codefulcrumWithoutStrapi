import React from "react"
import { Grid } from "@mui/material"

import PositionedCircles from "./PositionedCircles"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
function LeadershipTeam() {
  return (
    <div>
      <PositionedCircles />
      <div className="container">
        <Grid container>
          <Grid item md={6} pr={{ md: 12, sm: 10, xs: 0 }}>
            <div>
              <Heading variant="64">Our Leadership Team</Heading>
            </div>
          </Grid>
          <Grid item md={6} className="m-auto">
            <div data-aos="fade-left" data-aos-duration="1000">
              <Text>
                At codeFulcrum our teams consist of talented and creative
                developers, designers and project managers who are readily
                available to dive into any complex business challenge.
              </Text>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default LeadershipTeam

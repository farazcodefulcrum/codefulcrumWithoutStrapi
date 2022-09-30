import React from "react"
import Heading from "../shared/Heading"
import { Box, Grid } from "@mui/material"
import Text from "../shared/Text"
import "./ProductStrategy.scss"
function StrategyConsultation() {
  return (
    <div className="consultation-bg">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <Heading variant="58" className="header">
            Why do you need product strategy consultation?{" "}
          </Heading>
        </div>
        <Grid container>
          <Grid item md={8} pt={{ md: 18, sm: 10, xs: 6 }}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <Text className="text">
                If you're planning to invest a significant amount of money in a
                mobile or web-based app, the most important factor to consider
                when selecting a vendor is whether the people who will be
                developing it for you truly understand your goals.
              </Text>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={4} pt={{ md: 18, sm: 10, xs: 6 }}></Grid>
          <Grid item md={8} py={{ md: 18, sm: 10, xs: 6 }}>
            <div
              data-aos="fade-up"
              data-aos-anchor-placement="top"
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <Text className="text">
                Product strategy consultation plays an instrumental role in
                transforming an idea into a reality. All the planning, scoping
                and streamlining is done in the very beginning to witness
                tangible results.
              </Text>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default StrategyConsultation

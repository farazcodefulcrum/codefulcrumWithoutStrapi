import { Grid } from "@mui/material"
import React from "react"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
import "./Content.scss"
import { Box } from "@mui/material"
function Header() {
  return (
    <div
      className="container custom-software-header"
      data-aos="fade-up"
      data-aos-anchor-placement="top"
      data-aos-duration="500"
    >
      <Grid container mt={{ md: 14, sm: 7, xs: 4 }}>
        <Grid item md={4} sm={5} xs={12}>
          <Heading variant="48">What do we cover </Heading>
        </Grid>
        <Grid item md={8} sm={7} xs={12} pl={{ md: 26, sm: 7, xs: 0 }}>
          <Text>
            Each product strategy service is designed to understand and refine
            the business goals and decide on the best strategy to achieve them.
            The workshops usually cover these key points:
          </Text>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header

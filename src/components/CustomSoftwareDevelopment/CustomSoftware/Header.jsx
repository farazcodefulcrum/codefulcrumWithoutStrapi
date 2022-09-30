import { Grid } from "@mui/material"
import React from "react"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
import "./Content.scss"
import { Box } from "@mui/material"
function Header() {
  return (
    <div className="container custom-software-header">
      <Grid container mt={{ md: 10, sm: 7, xs: 4 }}>
        <Grid item md={8}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Heading variant="48">
              Why businesses choose custom software
            </Heading>
          </div>
        </Grid>
      </Grid>
      <Grid container mt={{ md: 2, sm: 2, xs: 2 }}>
        <Grid item md={8}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Text variant="64" className="desc">
              As current consumer needs and behaviours shift and the IT
              landscape evolves at breakneck speed, businesses across every
              industry sector have been forced to digitalize at least some
              aspects of their operations in order to respond with the agility
              required to remain competitive.
            </Text>
          </div>
        </Grid>
      </Grid>
      <Box mt={{ md: 14, sm: 7, xs: 4 }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text">
            Does this talk about custom apps sound like too much trouble for an
            uncertain outcome? Here are some of the advantages of creating a
            tailored application that is ideal for your key goals!
          </p>
        </div>
      </Box>
    </div>
  )
}

export default Header

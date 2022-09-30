import React from "react"
import { Box, Grid } from "@mui/material"
import Heading from "../../shared/Heading"
import "./Services.scss"
import Text from "../../shared/Text"
import ServicesAcordian from "./ServicesAcordian"
function Content() {
  return (
    <div className="services-bg-ps" id="services">
      <div className="container py-5 content">
        <Grid container pt={{ md: 7, sm: 5, xs: 3 }}>
          <Grid item md={5}>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Heading variant="48">
                What are our product strategy services
              </Heading>
            </div>
          </Grid>
          <Grid item md={7} className="m-auto" px={{ md: 6, sm: 4, xs: 0 }}>
            <div data-aos="fade-left" data-aos-duration="1000">
              <Text className="text">
                A well-prepared first step is crucial to a successful project.
                See how our expert business, technical and design consultants do
                it at codeFulcrum. Before starting any project we always offer
                one of the following product strategy service to our clients:
              </Text>
            </div>
          </Grid>
        </Grid>
        <Box py={{ md: 16, sm: 8, xs: 6 }}>
          <ServicesAcordian />
        </Box>
      </div>
    </div>
  )
}

export default Content

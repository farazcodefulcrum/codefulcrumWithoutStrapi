import React from "react"
import "./CoreValues.scss"
import { Grid } from "@mui/material"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
import JoinUs from "./JoinUs"
function CoreValues() {
  return (
    <div>
      <div className="core-bg">
        <div className="container">
          <Grid container pt={{ md: 18, sm: 12, xs: 10 }}>
            <Grid item md={4}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="64" className="top-header">
                  Our Core Values
                </Heading>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 10, sm: 6, xs: 4 }}>
            <Grid item md={5}></Grid>
            <Grid item md={7}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Text variant="24" className="text">
                  The values which guide all we do, from how we solve problems
                  for our clients to how we conduct ourselves in the office and
                  execute work.{" "}
                </Text>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 6, sm: 4, xs: 2 }}>
            <Grid item md={5}></Grid>
            <Grid item md={7}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="32" className="header">
                  Be Transparent
                </Heading>
                <Text variant="24" className="text">
                  We construct transparent interactions and openly communicate
                  our opinions because we have trust at all levels of
                  cooperation.
                </Text>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 6, sm: 4, xs: 2 }}>
            <Grid item md={5}></Grid>
            <Grid item md={7}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="32" className="header">
                  Be Straightforward
                </Heading>
                <Text variant="24" className="text">
                  To enable greater agility and speed, we value clear and
                  concise communication.
                </Text>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 20, sm: 14, xs: 2 }}>
            <Grid item md={8}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="32" className="header">
                  Be Decisive 
                </Heading>
                <Text variant="24" className="text">
                  We empower people to make quick decisions and take ownership
                  of them. We learn from every outcome.
                </Text>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 8, sm: 4, xs: 2 }}>
            <Grid item md={8}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="32" className="header">
                  Develop Yourself
                </Heading>
                <Text variant="24" className="text">
                  It's not always about the revenue. We strive for personal and
                  professional development in every way. We are always learning
                  to stay ahead of the curve.
                </Text>
              </div>
            </Grid>
          </Grid>
          <Grid container pt={{ md: 6, sm: 4, xs: 2 }}>
            <Grid item md={5}></Grid>
            <Grid item md={7}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="32" className="header">
                  Create Masterpieces
                </Heading>
                <Text variant="24" className="text">
                  We go above and beyond to deliver the best, whether it's a
                  product feature or a personalised touch of excellence.
                </Text>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <JoinUs />
    </div>
  )
}

export default CoreValues

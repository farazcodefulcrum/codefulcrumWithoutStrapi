import React from "react"
import { Grid, Box } from "@mui/material"
import Heading from "../shared/Heading"
import Button from "../shared/Button"
function DileveryProcess() {
  return (
    <div>
      <div className="delivery-process-wrapper ">
        <div className="background-img">
          <Grid container className="container py">
            <Grid item md={6} justifyContent="center">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
              >
                <Box mt={15}>
                  <Heading variant="48">
                    {" "}
                    Reach out so we can work together!
                  </Heading>
                  <p className="p-left">
                    Tell us about your project and we will make it work.
                  </p>
                  <div className="button">
                    <Button text="CONTACT US" variant="fill" href="/contact" />
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div>
        <Grid
          container
          className="container py"
          mt={{ sm: -20, md: -1, xs: -26 }}
        >
          <Grid item md={6}>
            <Heading variant="64">
              {" "}
              Our <br></br> Delivery <br></br>Process
            </Heading>
          </Grid>
          <Grid item md={6} className="m-auto">
            <p data-aos="fade-left" data-aos-duration="1000">
              Through the years, we’ve developed a flexible delivery process
              that we tailor to the specific requirements of your project.
              <br></br> <br></br>
              Every stage of the delivery process is clear and transparent.
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default DileveryProcess

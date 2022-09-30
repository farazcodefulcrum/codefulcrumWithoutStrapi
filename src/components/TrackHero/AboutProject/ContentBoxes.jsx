import React from "react"
import { Grid } from "@mui/material"
function ContentBoxes() {
  return (
    <div className="container content-boxes">
      <Grid
        container
        justifyContent="space-between"
        className="d-flex justify-content-between"
        rowSpacing={3}
        columnSpacing={{ md: 3, sm: 2, xs: 0 }}
        mt={14}
        mb={1}
      >
        <Grid item md={6} xs={12} sm={6}>
          <div className="box-1" data-aos="fade-up" data-aos-duration="1000">
            <p className="header">
              Limited Monolithic Architecture for Dealership Management
            </p>
            <p className="text">
              Non-scalable architecture slowed down new feature releases and was
              not sustainable due to the platform’s rapid growth.
            </p>
          </div>
        </Grid>
        <Grid item md={6} xs={12} sm={6}>
          <div className="box-1" data-aos="fade-up" data-aos-duration="1000">
            <p className="header">
              Customers Dependence on Admins for Event Registration
            </p>
            <p className="text">
              Interested attendees did not have direct online access to the
              events hosted on TrackHero.com.
            </p>
          </div>
        </Grid>
        <Grid item md={12} xs={12} sm={12}>
          <div className="box-1" data-aos="fade-up" data-aos-duration="1000">
            <p className="header">
              Scalability and Maintainability of Codebase Issues as New
              Dealerships Joined the Platform
            </p>
            <p className="text">
              Releasing new features and maintaining the platform became
              inconvenient as it outgrew the Dealership Management Framework’s
              capabilities.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ContentBoxes

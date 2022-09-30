import React from "react"
import { Grid } from "@mui/material"
import Heading from "../shared/Heading"
function Features() {
  const boxData = [
    {
      id: 1,
      text: "Real Time Vehicle Queue Management",
    },
    {
      id: 2,
      text: "Stripe Hosted Invoice supporting Credit Card, Debit Card, ACH Payments",
    },
    {
      id: 3,
      text: "ZoHo Integration",
    },
    {
      id: 4,
      text: "OpenTable Integration",
    },
    {
      id: 5,
      text: "Dealership Linked as Teams",
    },
    {
      id: 6,
      text: "Vehicle Sharing among Dealerships",
    },
    {
      id: 7,
      text: "Rental Car Reservation with Rental Settings for each Dealership",
    },
    {
      id: 8,
      text: "Reservation Waivers with Digital Signature",
    },
  ]
  return (
    <div className="features-trackhero">
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Heading variant="64" className="header">
                {" "}
                Extending Features List
              </Heading>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <p className="text" data-aos="fade-up" data-aos-duration="1000">
              With an aim to extend functionality for Dealership Teams as well
              as TrackHero's Super Admin, the following features were added to
              the web application.{" "}
            </p>
          </Grid>
        </Grid>

        <Grid
          container
          columnSpacing={{ md: 2, sm: 2, xs: 0 }}
          rowSpacing={2}
          mt={{ md: 3, sm: 2, xs: 2 }}
        >
          {boxData.map(item => {
            return (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
                <div
                  className="box"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  {item.text}
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default Features

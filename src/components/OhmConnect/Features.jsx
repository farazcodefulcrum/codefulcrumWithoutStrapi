import React from "react"
import { Grid } from "@mui/material"
import Heading from "../shared/Heading"
function Features() {
  const boxData = [
    {
      id: 1,
      text: "CCAs into utility drop-down list on OAuth page",
    },
    {
      id: 2,
      text: "New use case for exit intent survey",
    },
    {
      id: 3,
      text: "Long-form text input component",
    },
    {
      id: 4,
      text: "Tool for CX to award devices to legitimate users without enough points",
    },
    {
      id: 5,
      text: "Try-B4-Buy backend",
    },
    {
      id: 6,
      text: "Allow SMS Sends Prior to Phone Confirmation",
    },
    {
      id: 7,
      text: "Queue and store messages to prevent sending them at odd hours",
    },
    {
      id: 8,
      text: "Bulk update of newly created Locations",
    },
  ]
  return (
    <div className="features-ohm">
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="header">
                Dated Web App Modernization & Modification
              </p>
            </div>
          </Grid>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text">
              The first and foremost challenge was to identify and address
              errors in the web application in use which required bug fixing and
              feature enhancement. Next, the goal was to design a unique, more
              engaging, and a seamless experience for the users.
            </p>
          </div>
        </Grid>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="text">
            Considering the client's business requirements, our design and
            development teams built a web application (referred to as SPA or
            Single Page Application) using an emerging web design.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="bordered-text">
            A Single Page Application provides just the right amount of
            information for a user to make a decision and act on it by removing
            any unnecessary noise from the interface, focusing the user’s
            attention on the most important content.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="header">
            The following features were added in the SPA:
          </p>
        </div>
        <Grid
          container
          columnSpacing={{ md: 2, sm: 2, xs: 0 }}
          rowSpacing={2}
          mt={{ md: 2, sm: 2, xs: 1 }}
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

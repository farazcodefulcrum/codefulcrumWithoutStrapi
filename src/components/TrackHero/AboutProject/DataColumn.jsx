import React from "react"
import { Box, Grid } from "@mui/material"
/* eslint-disable */

import {
  Icon_1,
  Icon_2,
  Icon_3,
  Icon_4,
  Icon_5,
  Icon_6,
  Icon_7,
  Icon_8,
  Icon_9,
} from "../SVGs"
function DataColumn() {
  const data = [
    {
      id: 1,
      icon: <Icon_1 />,
      text: "Identified hot-fixes and architecture optimization issues in the legacy web application",
    },
    {
      id: 2,
      icon: <Icon_2 />,
      text: "Extended their MVP with a new feature set ",
    },
    {
      id: 3,
      icon: <Icon_3 />,
      text: "Added new functionality for Dealership Teams as well as TrackHero`s Super Admin",
    },
    {
      id: 4,
      icon: <Icon_4 />,
      text: "Implemented a secure DevOps workflow to accommodate ongoing development at a high velocity",
    },
    {
      id: 5,
      icon: <Icon_5 />,
      text: "Enabled the interconnectivity between the client’s server and third-party servers, such as those of the end clients, via an API. ",
    },
    {
      id: 6,
      icon: <Icon_6 />,
      text: "Built the User Interface from ground up, a Web SPA (Single Page Application), achieving increased fluidity in UX, dynamic data loading and client-side rendering.",
    },
    {
      id: 7,
      icon: <Icon_7 />,
      text: "Incorporated a fresh brand identity to complement the UI.",
    },
    {
      id: 8,
      icon: <Icon_8 />,
      text: "Implemented Product Design Strategy for TrackHero to incorporate value for business profitability and value for its users.",
    },
    {
      id: 9,
      icon: <Icon_9 />,
      text: "Connected Customers and Dealerships with a Companion PWA (Progressive Web App)",
    },
  ]
  return (
    <div className="data-column-trackhero">
      <div className="container">
        <Box>
          <div className="header" data-aos="fade-up" data-aos-duration="1000">
            Key results achieved by TrackHero and codeFulcrum collaboration
          </div>
        </Box>

        <Grid
          container
          columnSpacing={{ md: 3, sm: 2, xs: 0 }}
          rowSpacing={{ md: 3, sm: 3, xs: 2 }}
        >
          {data.map(item => {
            return (
              <Grid item xs={12} sm={6} md={6} key={item.id}>
                <div
                  className="content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="icon"> {item.icon}</div>
                  <p className="text">{item.text}</p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default DataColumn

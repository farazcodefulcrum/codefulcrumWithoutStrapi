import React from "react"
import { Box, Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

/* eslint-disable */

function DataColumn() {
  const data = [
    {
      id: 1,
      cls: "box-1",
      subText:
        "Power companies help them measure OhmConnect users' energy reductions",
      src: "/ohmConnect/Box-icons/icon-1.png",
    },
    {
      id: 2,
      cls: "box-2",
      subText:
        "When the users save up energy, they can redeem what they've earned",
      src: "/ohmConnect/Box-icons/icon-2.png",
    },
    {
      id: 3,
      cls: "box-3",
      subText: "They let the users know when and how to use less energy",
      src: "/ohmConnect/Box-icons/icon-3.png",
    },
  ]
  return (
    <div className="data-column-ohm">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="header">Here's how it works:</p>
        </div>
        <Grid
          container
          columnSpacing={{ md: 2, sm: 2, xs: 0 }}
          rowSpacing={1}
          pb={{ md: 14, sm: 10, xs: 7 }}
        >
          {data.map(item => {
            return (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <div
                  className="box"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={item.src} alt="logo" />
                  <p className="sub-text">{item.subText}</p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <StaticImage
          src="../../../../static/ohmConnect/frame-1.png"
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="img"
        />
      </div>
      {/* <img src="/ohmConnect/frame-1.png" alt="logo" className="img-fluid" /> */}
    </div>
  )
}

export default DataColumn

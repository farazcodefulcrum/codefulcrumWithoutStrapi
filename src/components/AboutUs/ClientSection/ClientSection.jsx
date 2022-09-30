import React from "react"
import { Grid } from "@mui/material"
import "./ClientSection.scss"
import {
  TrackHero,
  OhmConnect,
  Strada,
  Pixeleto,
  Vectorscient,
  DriverBee,
  Aimexperts,
  IBD,
  Ugami,
  Hero,
  Rating,
  Energy,
} from "../SVGs"

function ClientSection() {
  const imgs = [
    <TrackHero />,
    <OhmConnect />,
    <Strada />,
    <Pixeleto />,
    <Vectorscient />,
    <DriverBee />,
    <Aimexperts />,
    <IBD />,
    <Ugami />,
    <Hero />,
    <Rating />,
    <Energy />,
  ]
  const animateTimes = [
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "0",
      duration: "1000",
    },
    {
      delay: "100",
      duration: "900",
    },
    {
      delay: "200",
      duration: "800",
    },
    {
      delay: "300",
      duration: "700",
    },
    {
      delay: "400",
      duration: "600",
    },

    {
      delay: "500",
      duration: "500",
    },
    {
      delay: "250",
      duration: "750",
    },
    {
      delay: "450",
      duration: "550",
    },
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "400",
      duration: "600",
    },
  ]

  const shuffledTimers = animateTimes.sort(() => Math.random() - 0.5)
  return (
    <div className="client-section-wrapper-about">
      <div className="container">
        <Grid
          container
          rowSpacing={5}
          className="img-container"
          my={{ md: 5, sm: 3, xs: 2 }}
        >
          {imgs.map((item, i) => {
            return (
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                className="d-flex justify-content-center"
                key={i}
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration={shuffledTimers[i].duration}
                  data-aos-delay={shuffledTimers[i].delay}
                >
                  {item}
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default ClientSection

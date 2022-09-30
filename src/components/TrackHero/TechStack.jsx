import React from "react"
/* eslint-disable */
import { Grid } from "@mui/material"
import {
  Tech_1,
  Tech_2,
  Tech_3,
  Tech_4,
  Tech_5,
  Tech_6,
  Tech_7,
  Tech_8,
  Tech_9,
  Tech_10,
  Tech_11,
  Tech_12,
  Tech_13,
  Tech_14,
} from "./SVGs"
function TechStack() {
  const icons = [
    <Tech_1 />,
    <Tech_2 />,
    <Tech_3 />,
    <Tech_4 />,
    <Tech_5 />,
    <Tech_6 />,
    <Tech_7 />,
    <Tech_8 />,
    <Tech_9 />,
    <Tech_10 />,
    <Tech_11 />,
    <Tech_12 />,
    <Tech_13 />,
    <Tech_14 />,
  ]
  return (
    <div className="container tech-stack">
      <p data-aos="fade-up" data-aos-duration="1000">
        Technology stack
      </p>

      <div className="content" data-aos="fade-up" data-aos-duration="1000">
        <Grid container>
          {icons.map((icon, i) => {
            return (
              <Grid
                item
                xs={6}
                sm={4}
                md={3}
                key={i}
                className="d-flex justify-content-center  teck-wrapper-track"
                mt={5}
              >
                {icon}
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default TechStack

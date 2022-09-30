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
  Tech_15,
  Tech_16,
  Tech_17,
  Tech_18,
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
    <Tech_15 />,
    <Tech_16 />,
    <Tech_17 />,
    <Tech_18 />,
  ]
  return (
    <div className="container tech-stack-ohm">
      <div data-aos="fade-up" data-aos-duration="1000">
        <p>Technology stack</p>
      </div>
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
                className="d-flex justify-content-center  teck-wrapper-track img"
                mt={5}
              >
                {icon}
              </Grid>
            )
          })}
        </Grid>
      </div>
      <div className="review">
        <p className="text" data-aos="fade-up" data-aos-duration="1000">
          “Our collaboration with codeFulcrum isn’t project-based. Instead, they
          serve as offshore members of our development team, and we give them
          projects in many areas. codeFulcrum’s performance is equal to the top
          programmers we have onshore. Based on that, we’re truly happy with
          them, as evidenced by our continuing work and expansion.”
        </p>

        <div className=" d-flex justify-content-center">
          <div
            className="d-flex flex-column align-items-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="/ohmConnect/max.png" alt="logo" />
            <p className="name-">Max Dunn</p>
            <p className="post">Chief Software Architect, OhmConnect </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack

import React from "react"
import { Grid } from "@mui/material"

export default function ClientSection({ person, animateTimes }) {
  const [hover, setHover] = React.useState(false)

  return (
    <Grid item md={4} sm={4} xs={12} className="d-flex justify-content-center">
      <div
        data-aos="fade-up"
        data-aos-duration={animateTimes.duration}
        data-aos-delay={animateTimes.delay}
      >
        <div
          className="img"
          onMouseEnter={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{ display: hover ? "none" : "" }}
        >
          {person.img}
        </div>
        <div
          className="img"
          onMouseEnter={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{ display: hover ? "" : "none" }}
        >
          {person.hover}
        </div>

        <p className="header">{person.name}</p>
        <p className="text">{person.post}</p>
      </div>
    </Grid>
  )
}

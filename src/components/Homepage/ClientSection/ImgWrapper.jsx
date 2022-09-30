import React from "react"
import { Grid } from "@mui/material"
import "./ClientSection.scss"
export default function ClientSection({ clientData, shuffledTimers, index }) {
  const [hover, setHover] = React.useState(false)

  return (
    <Grid
      item
      md={3}
      sm={6}
      xs={12}
      className="d-flex justify-content-center"
      pb={{ md: index > 4 ? 5 : 3, sm: 10, xs: 10 }}
    >
      <div
        className="image-wrapper"
        data-aos="zoom-in"
        data-aos-duration={shuffledTimers.duration}
        data-aos-delay={shuffledTimers.delay}
      >
        <div className="hover-image"> {clientData.img}</div>

        <div className="hover-image hover-image--back">{clientData.hover}</div>
      </div>
      {/* <div
        data-aos="zoom-in"
        data-aos-duration={shuffledTimers.duration}
        data-aos-delay={shuffledTimers.delay}
      >
        <div
          className="img logo-images"
          onMouseEnter={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            display: hover ? "none" : "",
          }}
        >
          {clientData.img}
        </div>
        <div
          className="img logo-images"
          onMouseEnter={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
            display: hover ? "" : "none",
          }}
          data-aos="zoom-in"
        >
          {clientData.hover}
        </div>
      </div> */}
    </Grid>
  )
}

{
  /* <Grid item md={3} sm={6} xs={12} className="d-flex justify-content-center">
<div
  data-aos="zoom-in"
  data-aos-duration={shuffledTimers.duration}
  data-aos-delay={shuffledTimers.delay}
>
  {!hover && (
    <div
      className="img logo-images"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}

      // style={{
      //   opacity: hover ? "0" : "1",
      //   height: hover ? "0px" : "32px",
      // }}
    >
      {clientData.img}
    </div>
  )}
  {hover && (
    <div
      className="img logo-images"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseOut={() => setHover(false)}
      // data-aos="zoom-in"
      // data-aos-duration="600"
      style={{
        transition: "1s ease",
        //  height: hover ? "32px" : "0px",
      }}
    >
      {clientData.hover}
    </div>
  )}
</div>
</Grid> */
}

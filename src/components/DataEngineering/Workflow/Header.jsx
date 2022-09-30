import { Grid } from "@mui/material"
import React from "react"
import Heading from "../../shared/Heading"
import "./Workflow.scss"
function Header() {
  return (
    <div className="workflow-header">
      <div className="container">
        <Grid container py={{ md: 15, sm: 15, xs: 10 }}>
          <Grid item className="header">
            <div className="p-1" data-aos="fade-up" data-aos-duration="1000">
              We help businesses all over the world make the most of the data
              they process every day.
            </div>
          </Grid>
          <Grid item md={12} mt={{ md: 6, sm: 5, xs: 3 }}>
            <div className="p-2" data-aos="fade-up" data-aos-duration="1000">
              Take a look at how we implement data engineering solutions and
              pipelines at codeFulcrum.
            </div>
          </Grid>
          <Grid item className="header" md={5}></Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Header

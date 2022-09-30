import React from "react"
import { Grid } from "@mui/material"
import "./WorkWithUs.scss"
import Text from "../../../shared/Text"
import DataColumns from "./DataColumns"
function WorkContent() {
  return (
    <div className="position-relative">
      <div className="work-with-us">
        <Grid container className="content container" justifyContent="center">
          <Grid item md={6} sm={6} xs={12} mt={{ md: 14, sm: 8, xs: 5 }}>
            <div className="header" data-aos="fade-up" data-aos-duration="1000">
              {" "}
              Why Work With Us{" "}
            </div>
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            mt={{ md: 14, sm: 8, xs: 5 }}
            className="d-flex justify-content-center align-items-center"
          >
            <div data-aos="fade-up" data-aos-duration="1000">
              <Text className="text">
                We will identify a specific project approach and technologies
                that will answer specific business problems while also fitting
                your company's infrastructure and architecture. During a joint
                workshop, we will determine how to best deploy data engineering
                solutions in your company and what types of solutions you want
                to begin with.
              </Text>
            </div>
          </Grid>
        </Grid>
      </div>
      <DataColumns />
    </div>
  )
}

export default WorkContent

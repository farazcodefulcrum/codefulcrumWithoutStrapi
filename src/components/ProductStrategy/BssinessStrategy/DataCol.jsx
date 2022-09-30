import React from "react"
import { Grid, Box } from "@mui/material"
import {
  HeroWirePs,
  Analysis,
  Goals,
  User,
  Wireframes,
  Userstory,
  Cost,
  Documentation,
  Roadmap,
  Architect,
} from "../SVGs"
import Heading from "../../shared/Heading"
import "./BusinessStrategy.scss"

function DataCol() {
  const dataCol = [
    {
      id: 1,
      header: "Competitive Analysis",
      icon: <Analysis />,
    },
    {
      id: 2,
      header: "Goals and Milestones",
      icon: <Goals />,
    },
    {
      id: 3,
      header: "User Personas",
      icon: <User />,
    },
    {
      id: 4,
      header: "User Story Mapping",
      icon: <Userstory />,
    },
    {
      id: 5,
      header: "Wireframes",
      icon: <Wireframes />,
    },
    {
      id: 6,
      header: "Detailed Cost Estimate",
      icon: <Cost />,
    },
    {
      id: 7,
      header: "Technical Documentation",
      icon: <Documentation />,
    },
    {
      id: 8,
      header: "Development Roadmap",
      icon: <Roadmap />,
    },
    {
      id: 9,
      header: "System Architecture Recommendation Report",
      icon: <Architect />,
    },
  ]
  return (
    <div className="container data-col-bs">
      <Grid container mt={{ md: 14, sm: 7, xs: 4 }} columnSpacing={4}>
        {dataCol.map(item => {
          return (
            <Grid
              item
              md={4}
              sm={6}
              xs={6}
              ///
              mt={{ md: 8, sm: 4, xs: 3 }}
              key={item.id}
            >
              <div
                className="content"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="icon-wrapper">{item.icon}</div>
                <Box mt={{ md: 3, sm: 2, xs: 1 }} className="heading-wrapper">
                  <Heading variant="26" className="header">
                    {item.header}
                  </Heading>
                </Box>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default DataCol

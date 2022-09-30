import React from "react"
import { Box, Grid } from "@mui/material"
import Heading from "../shared/Heading"
import { Icon_1, Icon_2, Icon_3, Icon_4, Icon_5 } from "./SVGs"
function Team() {
  const dataCol = [
    {
      id: 1,
      icon: <Icon_1 />,
      text: "Backend Development",
    },
    {
      id: 2,
      icon: <Icon_2 />,
      text: "Frontend Development",
    },
    {
      id: 3,
      icon: <Icon_3 />,
      text: "CMS Development",
    },
    {
      id: 4,
      icon: <Icon_4 />,
      text: "Project Management",
    },
    {
      id: 5,
      icon: <Icon_5 />,
      text: "Software Testing for Quality Control and Assurance",
    },
  ]
  return (
    <div className="team-ohm">
      <div className="container">
        <Grid container>
          <Grid item xs={12} sm={12} md={12} mt={13}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Heading variant="48" className="header">
                Outsourcing Engineers
              </Heading>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="text">
                The client’s pain point has always been onboarding engineers for
                some specific engineering roles.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="1000">
              <p className="sub-text">
                To cater to our client, codeFulcrum has a team of efficient
                onsite engineers that we outstaff to them as soon as they unveil
                their needs to us.
              </p>
            </div>
          </Grid>
        </Grid>
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="sub-header">The domains that we cover are:</p>
        </div>

        <Grid
          container
          rowSpacing={2}
          pb={12}
          columnSpacing={{ md: 2, sm: 2, xs: 0 }}
        >
          {dataCol.map(item => {
            return (
              <Grid item xs={12} sm={6} md={6}>
                <div
                  className="content-col"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="circle">{item.icon}</div>
                  <p className="name">{item.text}</p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default Team

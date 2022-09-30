import React from "react"
import { Grid } from "@mui/material"
function DataCol() {
  const colData = [
    {
      id: 1,
      heading: "Collaborative Decision Making",
      text: "In this step we’ll collaborate with our team to make a good decision.",
    },
    {
      id: 2,
      heading: "Technical Feasibility",
      text: "Here we check the feasibility of your product or service to determine whether it's possible for your company.",
    },
    {
      id: 3,
      heading: "Intensive Discussions",
      text: "We’ll have detail discussion about your product goals, visions and try to know your users.",
    },
    {
      id: 4,
      heading: "Budget Considerations ",
      text: "Planning and monitoring your program budget helps avoid unanticipated expenses during implementation. ",
    },
    {
      id: 5,
      heading: "Structured Roadmap",
      text: "We’d be sharing a structured roadmap of the features the team is going to work on.",
    },
    {
      id: 6,
      heading: "Expert Consultation ",
      text: "You can have a free consultation with our experts to gain more details.",
    },
  ]
  return (
    <div className="data-col-custom-software-ps">
      <div className="container">
        <Grid
          container
          mt={{ md: 16, sm: 9, xs: 7 }}
          mb={{ md: 16, sm: 9, xs: 4 }}
          columnSpacing={{ md: 10, sm: 6, xs: 0 }}
          rowSpacing={{ md: 0, sm: 0, xs: 3 }}
        >
          {colData.map(item => {
            return (
              <Grid item md={4} sm={4} xs={12} key={item.id}>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top"
                  data-aos-duration="800"
                  data-aos-delay="230"
                >
                  <div className="divider"></div>
                  <p className="header">{item.heading}</p>
                  <p className="text">{item.text}</p>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

export default DataCol

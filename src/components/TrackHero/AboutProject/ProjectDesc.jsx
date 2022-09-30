import React from "react"
import Grid from "@mui/material/Grid"
function ProjectDesc() {
  const data = [
    {
      id: 1,
      header: "Industry Vertical",
      text: "Automotive, Experiential Event Management",
    },
    {
      id: 2,
      header: "Business Model",
      text: "B2B SaaS, B2C",
    },
    {
      id: 3,
      header: "Our Work",
      text: "Custom Software Development, Design Sprint, UI/UX Design, UI Animation",
    },
  ]
  return (
    <div className="project-desc-trackhero">
      <Grid
        container
        columnSpacing={{ md: 20, sm: 10, xs: 0 }}
        pt={{ md: 8, sm: 6, xs: 4 }}
      >
        {data.map(item => {
          return (
            <Grid item xs={12} sm={4} md={4} key={item.id}>
              <div className="content">
                <p className="header">{item.header}</p>
                <p className="text">{item.text}</p>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default ProjectDesc

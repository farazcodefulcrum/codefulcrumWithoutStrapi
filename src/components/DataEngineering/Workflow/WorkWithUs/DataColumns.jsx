import React from "react"
import { Grid, Box } from "@mui/material"
import "./WorkWithUs.scss"
import Button from "../../../shared/Button"
function DataColumns() {
  const colData = [
    {
      id: 1,
      heading: "High Quality",
      text: "We collaborate with our clients to extract critical business information, manage data, and assure the highest degree of data quality and availability.",
    },
    {
      id: 2,
      heading: "Increased Efficiency",
      text: "We implement solutions that can save you thousands of dollars in operational expenditures.",
    },
    {
      id: 3,
      heading: "Business Insights",
      text: "We help companies make better decisions with important insights from our product strategy and data engineering experts.",
    },
    {
      id: 4,
      heading: "Start In 1 Week",
      text: "We can assign experts to your project in as little as one week.",
    },
  ]
  return (
    <div className="data-column">
      <div className="container">
        <Grid
          container
          rowSpacing={8}
          justifyContent="center"
          columnSpacing={{ md: 14, sm: 5, xs: 0 }}
        >
          {colData.map(item => {
            return (
              <Grid item md={6} sm={6} xs={12} key={item.id}>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <p className="header">{item.heading}</p>
                  <p className="text">{item.text}</p>
                  <div className="divider"></div>
                </div>
              </Grid>
            )
          })}
        </Grid>
      </div>
      <Box
        className="d-flex justify-content-center"
        mt={{ md: 8, sm: 5, xs: 3 }}
      >
        <div data-aos="fade-up" data-aos-duration="1000">
          <Button text="LET'S WORK TOGETHER" variant="fill" href="/contact" />
        </div>
      </Box>
    </div>
  )
}

export default DataColumns

import React from "react"
import { Grid } from "@mui/material"
function DataCol() {
  const colData = [
    {
      id: 1,
      heading: "Higher Security",
      text: "Ensure that your product is well-protected against digital fraud by implementing a customized cybersecurity solution.",
    },
    {
      id: 2,
      heading: "Motivating Adaptability",
      text: "Don't waste money on features you won't use; instead, invest in those you know your users will love.",
    },
    {
      id: 3,
      heading: "Improved Processes",
      text: "With the right management tools for your specific work operations, you can automate your business processes.",
    },
    {
      id: 4,
      heading: "Greater Scalability",
      text: "Create a customized solution to assist you in adapting to industry changes and requirements. ",
    },
    {
      id: 5,
      heading: "Distinct Brand Experience",
      text: "Do you want to stand out from the crowd by offering something different? Create an exceptional user experience by utilizing bespoke software.",
    },
    {
      id: 6,
      heading: "Seamless Integrations",
      text: "Custom software will assist you in seamlessly integrating any third-party solutions in order to provide the best service possible to your customers.",
    },
  ]
  return (
    <div className="data-col-custom-software">
      <div className="container">
        <Grid
          container
          mt={{ md: 14, sm: 6, xs: 3 }}
          columnSpacing={{ md: 10, sm: 6, xs: 0 }}
          rowSpacing={{ md: 0, sm: 0, xs: 3 }}
        >
          {colData.map(item => {
            return (
              <Grid item md={4} sm={4} xs={12} key={item.id}>
                <div data-aos="fade-up" data-aos-duration="1000">
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

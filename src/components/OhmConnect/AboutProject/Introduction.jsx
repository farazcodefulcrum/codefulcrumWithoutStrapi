import React from "react"
import Grid from "@mui/material/Grid"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
function Introduction() {
  return (
    <div className="container introduction-ohm">
      <div
        className="content-intro"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <Text variant="18" className="text">
          OhmConnect is a power management company that provides home energy
          control solutions via smart meter analytics and energy market
          integration. Their innovative platform enables residential users to
          sell their energy reductions directly into energy markets via demand
          response.
        </Text>
      </div>
    </div>
  )
}

export default Introduction

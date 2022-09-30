import { Grid } from "@mui/material"
import React from "react"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
//import "./Content.scss"
import "./BusinessStrategy.scss"
import { Box } from "@mui/material"
function Header() {
  return (
    <div className="container product-strategy-header">
      <Grid container mt={{ md: 14, sm: 7, xs: 4 }}>
        <Grid item md={4} sm={5} xs={12}>
          <Box mr={{ md: 12, sm: 8, xs: 0 }}>
            <div data-aos="fade-up" data-aos-duration="800">
              <Heading variant="48" className="header">
                What you’ll get{" "}
              </Heading>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          md={8}
          sm={7}
          xs={12}
          pl={{ md: 26, sm: 7, xs: 0 }}
          className="m-auto"
        >
          <div data-aos="fade-up" data-aos-duration="800">
            <Text className="text">
              You will not only understand the development process after robust
              conversations with our expert team, but you will also walk away
              with everything you need to move forward with your app
              development.
            </Text>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Header

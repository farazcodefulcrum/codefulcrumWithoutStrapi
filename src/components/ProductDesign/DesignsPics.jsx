import React from "react"
import { Grid } from "@mui/material"
import "./ProductDesign.scss"
import WorkSwiper from "./WorkSwiper"
function DesignsPics() {
  return (
    <div className="design-pics py-5" id="design-pics">
      <div className="container inner-div">
        <WorkSwiper />
      </div>
    </div>
  )
}

export default DesignsPics
{
  /* <Grid
container
className=""
justifyContent="center"
alignItems="center"
rowGap={3}
>
<Grid item className="img-1" md={4} sm={12} xs={12}>
  <img src="/productStrategy/onboarding.png" alt="" />
</Grid>
<Grid item className="img-2" md={4} sm={12} xs={12}>
  <img src="/productStrategy/social-feed.png" alt="" />
</Grid>
<Grid item className="img-3" md={4} sm={12} xs={12}>
  <img src="/productStrategy/experiences.png" alt="" />
</Grid>
</Grid> */
}

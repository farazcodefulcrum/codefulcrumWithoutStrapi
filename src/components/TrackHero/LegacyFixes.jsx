import React from "react"
import { Grid } from "@mui/material"
import Heading from "../shared/Heading"
import { StaticImage } from "gatsby-plugin-image"

function LegacyFixes() {
  return (
    <div className="lagacy-wrapper">
      <div className="legacy-fixes">
        <div className="container">
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="64" className="header">
                  Quick Legacy App Fixes to MVP 1.0{" "}
                </Heading>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="d-flex align-items-center"
            >
              <div className="text" data-aos="fade-up" data-aos-duration="1000">
                When codeFulcrum stepped in, the first thing we did was to
                identify hot-fixes and architecture optimization issues focused
                on performance enhancement along with some Backend
                Infrastructure improvements.
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="container text">
        <p data-aos="fade-up" data-aos-duration="1000">
          The reaction times of the application were significantly improved, but
          since their web app was dated, it was bogged down by scalability and
          codebase maintainability issues as new dealerships joined the
          platform.
        </p>
      </div>
      <div className="img-wrapper" data-aos="fade-up" data-aos-duration="1000">
        <StaticImage
          src="../../../static/trackHero/frame-1.png"
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="img"
        />
        {/* <img src="/trackHero/frame-1.png" alt="" className="img-fluid" /> */}
      </div>
    </div>
  )
}

export default LegacyFixes

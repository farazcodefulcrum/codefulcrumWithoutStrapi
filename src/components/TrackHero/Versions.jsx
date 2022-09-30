import React from "react"
import { Grid } from "@mui/material"
function Versions() {
  return (
    <div className="versions-trackhero">
      <div class="row">
        <div class="column">
          <p className="text container">
            The reaction times of the application were significantly improved,
            but since their web app was dated, it was bogged down by scalability
            and codebase maintainability issues as new dealerships joined the
            platform.
          </p>
          <img src="/trackHero/frame-3.png" className="img-left" />
          <p className="updated">UPDATED VERSION</p>
        </div>
        <div class="column">
          <img src="/trackHero/frame-2.png" />
          <p className="older">OLD VERSION</p>
        </div>
      </div>

      {/* <div style={{ display: "inline-block" }}>
        <div>
          <div>
            <p className="text">
              The reaction times of the application were significantly improved,
              but since their web app was dated, it was bogged down by
              scalability and codebase maintainability issues as new dealerships
              joined the platform.
            </p>
          </div>
          <div>
            {" "}
            <img src="/trackHero/frame-2.png" alt="" className="img-fluid" />
          </div>
        </div>
      </div> */}
      {/* <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          pr={{ md: 5, sm: 3, xs: 0 }}
          pl={{ md: 17, sm: 7, xs: 5 }}
          sx={{ height: "400px" }}
          alignItems="start"
        >
          <p className="text">
            The reaction times of the application were significantly improved,
            but since their web app was dated, it was bogged down by scalability
            and codebase maintainability issues as new dealerships joined the
            platform.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={6} sx={{ height: "800px" }}>
          <img src="/trackHero/frame-2.png" alt="" className="img-fluid" />
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={{ height: "800px" }}>
          <img src="/trackHero/frame-2.png" alt="" className="img-fluid" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          pr={{ md: 5, sm: 3, xs: 0 }}
          pl={{ md: 17, sm: 7, xs: 5 }}
          sx={{ height: "400px" }}
        >
          <p className="text">
            The reaction times of the application were significantly improved,
            but since their web app was dated, it was bogged down by scalability
            and codebase maintainability issues as new dealerships joined the
            platform.
          </p>
        </Grid>
      </Grid> */}
    </div>
  )
}

export default Versions

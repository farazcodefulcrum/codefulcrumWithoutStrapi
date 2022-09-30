import React from "react"
import "./CoreValues.scss"
import { Box } from "@mui/system"
import Button from "../../shared/Button"
function JoinUs() {
  return (
    <div className="join-us-bg">
      <div className="container inner-div ">
        <Box px={{ md: 8, sm: 4, xs: 0 }} py={{ md: 12, sm: 8, xs: 6 }}>
          <div
            className="text"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
          >
            {" "}
            We're always on the hunt for individuals whose values align with
            ours. We'd love to hear from you if you think your skills and
            personality would be a good fit for our team.
          </div>
          <div
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-duration="900"
          >
            <Button
              text="JOIN US"
              variant="fill"
              href="https://codefulcrum.zohorecruit.com/jobs/Careers"
            />
          </div>
        </Box>
      </div>
    </div>
  )
}

export default JoinUs

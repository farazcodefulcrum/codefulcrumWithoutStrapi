import React from "react"
import { Box } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

function Integrations() {
  return (
    <div className="integrations">
      <div data-aos="fade-up" data-aos-duration="1000">
        <StaticImage
          src="../../../static/ohmConnect/frame-2.png"
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="img"
        />
        {/* <img src="/ohmConnect/frame-2.png" alt="logo" className="img-fluid" /> */}
      </div>
    </div>
  )
}

export default Integrations

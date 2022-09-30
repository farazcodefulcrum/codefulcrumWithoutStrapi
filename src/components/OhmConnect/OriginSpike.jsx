import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function OriginSpike() {
  return (
    <>
      <div className="origin-spike">
        <div className="container" data-aos="fade-up" data-aos-duration="1300">
          <div data-aos="fade-up" data-aos-duration="1300">
            <p className="header">Origin-Spike</p>
            <p className="text">
              Origin Spike is a rewards program that offers Origin customers in
              Australia a way to get paid for saving energy – and help reduce
              the load on the electricity grid in the process.
            </p>
            <p className="sub-text">
              OhmConnect provides its proprietary software for energy
              consumption management to Origin-Spike that is specific for
              customers in Australia. We have worked on its payout fraud
              checking algorithms that cross verify data from Paypal and
              internally generated billing data. We have also worked on dynamic
              data filtering of unused phone numbers using Twilio API saving
              outgoing costs.
            </p>
          </div>
        </div>{" "}
      </div>

      <StaticImage
        src="../../../static/ohmConnect/SPA.png"
        placeholder="none"
        formats={["auto", "webp", "avif"]}
        alt="img"
      />

      {/* <img src="/ohmConnect/SPA.png" alt="" className="img-fluid" /> */}
    </>
  )
}

export default OriginSpike

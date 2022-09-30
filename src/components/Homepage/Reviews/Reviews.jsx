import React from "react"
import Heading from "../../shared/Heading"
import "./Reviews.scss"

export default function Reviews() {
  return (
    <div className="reviews-box">
      <div className="container">
        <div className="reviews">
          <div>
            <Heading variant="48" align="center" color="white" className="mb-4">
              What our partners say about us
            </Heading>
          </div>

          <div className="clutch-widget-box" id="widget">
            <div
              className="clutch-widget"
              data-url="https://widget.clutch.co"
              data-widget-type="4"
              //data-height="auto"
              data-expandifr="true"
              data-snippets="true"
              data-clutchcompany-id="1566401"
            ></div>
            {/* <div
              className="clutch-widget"
              data-nofollow="true"
              data-url="https://widget.clutch.co"
              data-widget-type="12"
              data-height="auto"
              data-expandifr="true"
              data-snippets="true"
              data-clutchcompany-id="1566401"
            ></div> */}
          </div>
        </div>
      </div>
      <div className="blue-bg"></div>
    </div>
  )
}

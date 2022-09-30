import React from "react"
import { Box, Grid } from "@mui/material"
import "./Collabrations.scss"

/* eslint-disable */

function DataColumn() {
  const dataLeft = [
    {
      id: 1,
      text: "Legacy App Maintenance & Upgrade to SPA",
      subText:
        "Fixed bugs in the legacy web application as a quick solution. Optimized infrastructure and upgraded their multi-page app to single page app..",
    },

    {
      id: 3,
      text: "Incentivized OhmHour Plan",
      subText:
        "Created an internal tool for managing OhmHour events and implemented algorithms to calculate their saved watts to later reward them based on their event performance. ",
    },
  ]
  const dataRight = [
    {
      id: 2,
      text: "Device Integration ",
      subText:
        "Integrated a number of smart energy monitoring devices with OhmConnect's system to track their users' electricity consumption.",
    },

    {
      id: 4,
      text: "Origin-Spike",
      subText:
        "Worked on their payout fraud checking algorithms and dynamic data filtering of unused phone numbers using Twilio API saving outgoing costs.",
    },
    {
      id: 5,
      text: "Website Development ",
      subText:
        "Designed and developed a marketing website for their Texas branch.",
    },
  ]
  return (
    <div className="data-column-collab">
      <div className="container">
        <div class="row">
          <div class="column">
            {dataLeft.map(item => {
              return (
                <div
                  className="box-left"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="text">{item.text}</p>
                  <p className="sub-text">{item.subText}</p>
                </div>
              )
            })}
          </div>
          <div class="column">
            {dataRight.map(item => {
              return (
                <div
                  className="box-right"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p className="text">{item.text}</p>
                  <p className="sub-text">{item.subText}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataColumn

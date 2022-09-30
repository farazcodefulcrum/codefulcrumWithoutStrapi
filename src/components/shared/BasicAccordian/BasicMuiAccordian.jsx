import React, { useState } from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { DropdownArrow } from "../../Services-Page/SVGs"
import "./Accordian.scss"
const Arrow = function () {
  return <img src="/arrow-white.svg"></img>
}
export default function SimpleAccordion({ accordianData }) {
  const [accordianState, setAccordianState] = React.useState(accordianData[0])

  return (
    <div>
      {accordianData.map(item => {
        return (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Accordion
              elevation={0}
              className="basic-accordian"
              expanded={item.id === accordianState?.id}
              style={{
                backgroundColor:
                  item.id === accordianState?.id ? "#183266 " : "",
              }}
              onChange={() => {
                if (accordianState?.id === item.id) {
                  setAccordianState(null)
                } else {
                  setAccordianState(item)
                }
              }}
              key={item.id}
            >
              <AccordionSummary
                expandIcon={
                  item.id === accordianState?.id ? <Arrow /> : <DropdownArrow />
                }
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <div
                  className="header"
                  style={{
                    color: item.id === accordianState?.id ? "white " : "black",
                  }}
                >
                  {item.heading}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <div
                  style={{
                    color: item.id === accordianState?.id ? "white " : "black",
                  }}
                >
                  {item.text}
                </div>
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { DropdownArrow } from "../../../../Services-Page/SVGs"
import "./Accordian.scss"
export default function SimpleAccordion({ accordianData }) {
  const [accordianState, setAccordianState] = React.useState(accordianData[0])

  return (
    <div>
      {accordianData.map(item => {
        return (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <Accordion
              className="accordian-wrapper-ps container"
              elevation={0}
              expanded={item.id === accordianState?.id}
              onChange={() => {
                if (accordianState?.id === item.id) {
                  setAccordianState(null)
                } else {
                  setAccordianState(item)
                }
              }}
              style={{
                backgroundColor:
                  accordianState?.id === item.id ? "#FEF1DE" : "transparent",
              }}
              key={item.id}
            >
              <AccordionSummary expandIcon={<DropdownArrow />}>
                <div>
                  <Typography className="header">{item.heading}</Typography>
                  {accordianState?.id !== item.id ? (
                    <p className="sub-text">{item.desc.substring(0, 100)}...</p>
                  ) : (
                    <p className="text">{item.desc.substring(0, 1000)}</p>
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails></AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

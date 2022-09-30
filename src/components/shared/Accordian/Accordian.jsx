import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import { DropdownArrow } from "../../Services-Page/SVGs"
import "./Accordian.scss"
export default function SimpleAccordion({ accordianData }) {
  const [accordianState, setAccordianState] = React.useState(accordianData[0])

  return (
    <div className="container">
      {accordianData.map(item => {
        return (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
          >
            <Accordion
              className="accordian-wrapper container"
              elevation={0}
              expanded={item.id === accordianState?.id}
              onClick={() => {
                if (accordianState?.id === item.id) {
                  setAccordianState(null)
                } else {
                  setAccordianState(item)
                }
              }}
              style={{
                backgroundColor:
                  accordianState?.id === item.id ? "#FABB5A" : "transparent",
              }}
              key={item.id}
            >
              <AccordionSummary expandIcon={<DropdownArrow />}>
                <div>
                  <Typography className="header">{item.heading}</Typography>
                  {!accordianState && (
                    <Typography className="accordian-desc">
                      {item.desc}
                    </Typography>
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <ul className="accordian-bullets">
                  {item.text.map((paragraph, i) => {
                    return <li key={i}>{paragraph}</li>
                  })}
                </ul>
              </AccordionDetails>
            </Accordion>
          </div>
        )
      })}
    </div>
  )
}

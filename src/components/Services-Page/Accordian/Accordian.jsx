import * as React from "react"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import "./Accordian.scss"
import { DropdownArrowWhite } from "../SVGs"
import { DropdownArrow } from "../SVGs"
import { Arrow } from "../SVGs"
import { navigate } from "gatsby"
export default function SimpleAccordion({ data, url, index }) {
  const [active, setActive] = React.useState()
  React.useEffect(() => {
    if (index === 0) {
      setActive(data[0])
    }
  }, [])
  return (
    <div className="services-accordians">
      {data.map((item, i) => {
        return (
          <Accordion
            expanded={item.id === active?.id}
            key={item.id}
            sx={{
              "&:before": {
                display: "none",
              },
            }}
            className={
              item.id === active?.id
                ? "accordian-2 on-active-bg"
                : "accordian-2"
            }
            elevation={0}
            onClick={() => {
              if (active?.id === item.id) {
                setActive(null)
              } else {
                setActive(item)
              }
            }}
          >
            <AccordionSummary
              expandIcon={
                item.id === active?.id ? (
                  <DropdownArrowWhite />
                ) : (
                  <DropdownArrow />
                )
              }
            >
              <ul className="ul">
                <li key={i}>{item.header} </li>
              </ul>
            </AccordionSummary>
            <AccordionDetails
              className={item.id === active?.id ? "detail ul-active" : "detail"}
            >
              <Typography>{item.text}</Typography>
            </AccordionDetails>
          </Accordion>
        )
      })}

      <div className="div-bar-p-2" onClick={() => navigate(url)}>
        <p>Learn More</p> &nbsp;
        <span>
          <Arrow />
        </span>
      </div>
    </div>
  )
}

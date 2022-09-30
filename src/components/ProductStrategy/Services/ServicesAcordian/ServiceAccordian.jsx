import React from "react"
import Accordian from "./Accordian"

function ServiceAccordian() {
  const accordianData = [
    {
      id: 1,
      heading: "Discovery Workshop ",
      desc: "For those who have a wonderful idea but don't know how to make it work or how to make the business model work to its maximum potential.",
      colored: true,
    },
    {
      id: 2,
      heading: "Design Sprint",
      desc: "For those who require professional design consultation and architectural advice in order to develop their project.",
      colored: false,
    },
    {
      id: 3,
      heading: "Sprint Zero",
      desc: "For those who already have wireframing, clickable prototypes, and pixel-perfect screen shots and are ready to start developing their application.",
      colored: false,
    },
  ]
  return (
    <div className="service-accord">
      <Accordian accordianData={accordianData} />
    </div>
  )
}

export default ServiceAccordian

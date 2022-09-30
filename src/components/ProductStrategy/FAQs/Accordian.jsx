import React from "react"
import BasicAccordian from "../../shared/BasicAccordian"
import { Box } from "@mui/material"
import Heading from "../../shared/Heading"
import { AnswerOne, AnswerTwo, AnswerThree, AnswerFour } from "./AccordianData"

function Accordian() {
  const accordianData = [
    {
      id: 1,
      heading: " What is product strategy?",
      text: <AnswerOne />,
      colored: true,
    },
    {
      id: 2,
      heading: "Why is product strategy important?",
      text: <AnswerTwo />,
      colored: false,
    },
    {
      id: 3,
      heading: "When can I use product strategy?",
      text: <AnswerThree />,
      colored: false,
    },
    {
      id: 4,
      heading: "How long does it take to prepare a product strategy?",
      text: <AnswerFour />,
      colored: false,
    },
  ]
  return (
    <div className="container">
      <Box mt={{ md: 8, sm: 5, xs: 3 }} mb={{ md: 14, sm: 8, xs: 5 }}>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          {" "}
          <Heading variant="52">FAQ'S</Heading>
        </div>
        <BasicAccordian accordianData={accordianData} />
      </Box>
    </div>
  )
}

export default Accordian

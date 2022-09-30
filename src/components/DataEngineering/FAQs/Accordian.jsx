import React from "react"
import BasicAccordian from "../../shared/BasicAccordian"
import { Box } from "@mui/material"
import Heading from "../../shared/Heading"
import { AnswerOne, AnswerTwo, AnswerThree, AnswerFour } from "./AccordianData"

function Accordian() {
  const accordianData = [
    {
      id: 1,
      heading: "Why is data engineering so important?",
      text: <AnswerOne />,
      colored: true,
    },
    {
      id: 2,
      heading: "Do I need data engineering?",
      text: <AnswerTwo />,
      colored: false,
    },
    {
      id: 3,
      heading: "What does a data engineer do?",
      text: <AnswerThree />,
      colored: false,
    },
    {
      id: 4,
      heading: "What is the future of data engineering",
      text: <AnswerFour />,
      colored: false,
    },
  ]
  return (
    <div className="container">
      <Box mt={{ md: 8, sm: 5, xs: 3 }} mb={{ md: 14, sm: 8, xs: 5 }}>
        <Heading variant="52">FAQ'S</Heading>
        <BasicAccordian accordianData={accordianData} />
      </Box>
    </div>
  )
}

export default Accordian

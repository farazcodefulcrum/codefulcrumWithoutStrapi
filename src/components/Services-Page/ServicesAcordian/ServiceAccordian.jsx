import React from "react"
import Accordian from "../../shared/Accordian"
import { Grid } from "@mui/material"
import Heading from "../../shared/Heading"
import ServicesFooter from "../../shared/ServicesFooter/ContactUs"
import Estimate from "../PriceServices/Estimate"
function ServiceAccordian() {
  const accordianData = [
    {
      id: 1,
      heading: "Team Augmentation",
      desc: "This engagement model works well when you envision a series of software projects but don’t wish...",
      text: [
        "This engagement model works well when you envision a series of software projects but don’t wish to hire permanent employees, or if you are finding it difficult to find the right skill set in a timely manner.",
        "This one provides flexibility to change course and re-prioritize your projects and tasks as you go along. It allows you full control over how you would like to make the best use of your team’s time and skill set.",
        "You work directly with your team members at codeFulcrum and assign tasks. codeFulcrum Agile scrum master assists with the process.",
        "This engagement model offers discounted rates compared to the Project Based/Fixed Cost engagement models.",
      ],
    },
    {
      id: 2,
      heading: "Project Based",
      desc: "This engagement model is suitable when your software requirements are well-defined and not like...",
      text: [
        "This engagement model is suitable when your software requirements are well-defined and not likely to change during the development process.",
        "We work with you upfront to define your software specifications in detail.",
        "We then guarantee delivery of the defined set of functionality in a specific time frame and cost.",
        "This engagement model is not suitable for projects where software requirements are likely to change or evolve.",
      ],
    },
    {
      id: 3,
      heading: "Time and Material (T&M)",
      desc: "This engagement model works best when the amount of development work envisioned....",
      text: [
        "This engagement model works best when the amount of development work envisioned is small but not well-defined.",
        "The engagement is split into smaller fixed-cost/fixed-time phases (e.g. one month long).",
        "This engagement model limits your exposure for each phase and provides the option to review and decide about the next phase’s budget allocation only if you are satisfied with the deliverables of the preceding phase.",
        "This engagement model is not suitable for on-going development requirements and turnarounds are naturally not as fast as those possible with dedicated teams.",
      ],
    },
  ]
  return (
    <div className="services-img-wrapper">
      <Grid container className="container">
        <Grid item md={7}>
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            data-aos-duration="1000"
          >
            <Heading variant="48">
              We work under a variety of engagement models built upon teamwork
              and partnership.
            </Heading>
          </div>
        </Grid>
      </Grid>
      <Grid container mb={12} className="container">
        <Grid item md={5} mt={4}>
          <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <p>
              Accelerate your projects with codeFulcrum's top technical and
              management talent along with collaborative engagement.
            </p>
          </div>
        </Grid>
      </Grid>
      <div className="service-accord">
        <div>
          <Accordian accordianData={accordianData} />
        </div>
      </div>
      <ServicesFooter />
    </div>
  )
}

export default ServiceAccordian

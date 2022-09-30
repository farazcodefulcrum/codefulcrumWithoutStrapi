import React from "react"

import Accordion from "react-bootstrap/Accordion"
import { Box } from "@mui/system"
import "./QuickProject.scss"
import Heading from "../../shared/Heading"

export default function QuickProject() {
  const QuickProjectData = [
    {
      id: 1,
      heading: "Ideation & Estimation",
      subHeading: "Understanding your idea and needs",
      text: "First and foremost we determine the scope of your project and take the time to grasp your product idea and business goals. This includes evaluating potential features, tech solutions, and the time required to deliver them. As a result, we can provide you with a general quotation and timeline.",
    },
    {
      id: 2,
      heading: "Product Strategy Consultation",
      subHeading: "Sharpening your vision and discussing the details",
      text: "We want to ensure that your idea becomes a roaring success. We put together a session of product strategy consulting services - whichever best meets your needs - to help you determine the right plan and sharpen your vision. At the end of this phase, we have wireframes for your app and the first design drafts, we have gathered development requirements, and we have created the project's basic documentation. Everything is in order!",
    },
    {
      id: 3,
      heading: "Design & Development",
      subHeading: "Bringing your application idea into reality ",
      text: "Now it's time to get to work! When the project begins, we finalize the designs and start working on your app. The length of this phase is determined by the size and complexity of the app. It normally takes us 3 months to develop a fully functional MVP - a minimum viable product suitable for market release.",
    },
    {
      id: 4,
      heading: "QA & Testing",
      subHeading: "Ensuring smooth running of the application",
      text: "We take pride in the quality of our service, which means that our QA testers are an essential part of the team, assisting in the development of a safe, secure, and reliable digital product. Before any commercial user accesses the platform, we put the application through intensive stress testing to guarantee that your product performs as required across all platforms and operating systems.",
    },
    {
      id: 5,
      heading: "Product Release",
      subHeading: "Introducing your product to the market",
      text: "It's time to shine! We handle the deployment and release of your product as soon as it is completed. Timing is critical in this case; we ensure that every component of the system is launched on time and operates flawlessly, with no downtime.",
    },
    {
      id: 6,
      heading: "Maintenance & Support ",
      subHeading: "Joining forces long-term",
      text: "We provide ongoing support once your application is live. If you think that your application needs further features or improvements, that's terrific. We get to work right away, while still supporting the current version. However, if you choose to transfer the project to your in-house team, we will facilitate you in planning the process and ensure a smooth handoff.",
    },
  ]
  return (
    <div className="quick-project-services">
      <Box mt={10} className="container">
        <div
          className="quick-project-inner"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="row">
            <div className="col-md-12">
              <Accordion>
                {!!QuickProjectData &&
                  QuickProjectData.map(item => {
                    return (
                      <Accordion.Item eventKey={item.id} key={item.id}>
                        <div className="d-flex align-items-center">
                          <Heading
                            align="center"
                            variant="42"
                            className="number"
                          >
                            {item.id}
                          </Heading>
                          <div className="w-100">
                            <Accordion.Header>{item.heading}</Accordion.Header>
                            <Accordion.Body>
                              <p className="header">{item.subHeading}</p>
                              <p className="body-paragraph">{item.text}</p>
                            </Accordion.Body>
                          </div>
                        </div>
                      </Accordion.Item>
                    )
                  })}
              </Accordion>
            </div>
          </div>
        </div>
      </Box>
    </div>
  )
}

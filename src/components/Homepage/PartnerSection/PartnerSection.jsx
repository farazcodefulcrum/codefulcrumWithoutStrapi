import React from "react"

import "./PartnerSection.scss"
import Heading from "../../shared/Heading"

export default function PartnerSection() {
  const partnerSectionData = [
    {
      id: 1,
      heading: "Practical and Transparent Approach",
      text: "We enable innovation through collaboration, with complete process transparency and a low-risk approach that lets you enjoy best-in-class services.",
    },
    {
      id: 2,
      heading: "We Keep Things Simple",
      text: "Our product strategy consultants ensure that we stay focused on the project requirements and don't build anything that your business doesn’t necessarily need.",
    },
    {
      id: 3,
      heading: "Experts on Board",
      text: "With more than a decade of experience between them, our team of creatives and technologists can navigate through projects using standardized processes and avoiding risks.",
    },
    {
      id: 4,
      heading: "Flexible to Your Needs",
      text: "We provide several engagement models where we help you create your product from conception to delivery or swiftly expand your team to keep your major project on schedule.",
    },
  ]
  return (
    <div className="partner-section">
      <div className="container">
        <div
          data-aos="fade-right"
          data-aos-duration="1300"
          data-aos-delay="250"
        >
          <Heading variant="48" className="mb-5">
            Why Partner <br /> With Us
          </Heading>
        </div>
        <div className="row g-5 mt-4">
          {partnerSectionData.map(item => {
            return (
              <div
                className="col-sm-6 partner-box"
                key={item.id}
                data-aos="zoom-out"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                <div className="border"></div>
                <Heading variant="24" className="p-0 my-4">
                  {item.heading}
                </Heading>
                <div className="text">{item.text}</div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

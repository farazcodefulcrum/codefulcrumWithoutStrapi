import React from "react"
import "./ClientSection.scss"
import ClientSectionImg from "../../AboutUs/ClientSection"
import Heading from "../../shared/Heading"

function ClientSection() {
  return (
    <div className="client-section-wrapper">
      <div className="container text-center pt-5">
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <Heading variant="58">
            We have worked with leaders of today, and those of tomorrow{" "}
          </Heading>
        </div>
      </div>
      <ClientSectionImg />
    </div>
  )
}

export default ClientSection

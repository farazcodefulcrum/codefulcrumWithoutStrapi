import React from "react"
import Heading from "../../shared/Heading"
import "./Collabrations.scss"

function BoxHeader() {
  return (
    <div className="collabrations">
      <div className="box">
        <div className="container">
          <div
            className="content"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Heading variant="64" className="header">
              How It Started
            </Heading>

            <p className="text">
              OhmConnect has an active team of 80+ members that includes
              Marketers, Customer Supporters, Product Designers, Managers, and
              Developers. They needed to augment their internal development
              team, so codeFulcrum was asked to step in as an outstaffing
              company to help them reach their desired goals on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxHeader

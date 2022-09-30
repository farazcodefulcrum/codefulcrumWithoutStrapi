import React from "react"

import "./ServicesSection.scss"
import Heading from "../Heading"
import { navigate } from "gatsby"
export default function ServicesSection({ data }) {
  return (
    <div className="services-section-hook">
      <div className="container">
        <div
          className="row g-3 align-items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top"
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <div className="col-lg-5">
            <Heading variant="48">
              See what else we can do for your business
            </Heading>
          </div>
          <div className="col-lg-6"></div>
        </div>
        <div className="row g-4 service-section-cards">
          {data.map(item => {
            return (
              <div
                className="col-md-4 col-sm-6 col-12"
                key={item.id}
                onClick={() => {
                  return navigate(item.nav)
                }}
                data-aos="zoom-in-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1000"
              >
                <div className="service-section-card">
                  <div className="icon">{item.icon}</div>
                  <div className="heading">{item.heading}</div>
                  <div className="text">{item.text}</div>
                  <div className="link-icon">
                    <svg
                      width="1.5rem"
                      height="1.5rem"
                      viewBox="0 0 23 22"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0.968383 18.9111C0.366984 19.4808 0.341325 20.4302 0.911071 21.0316C1.48082 21.633 2.43022 21.6587 3.03162 21.0889L0.968383 18.9111ZM22.4995 2.04053C22.5218 1.2124 21.8687 0.522929 21.0405 0.500548L7.54545 0.135816C6.71733 0.113434 6.02786 0.766618 6.00548 1.59474C5.98309 2.42287 6.63628 3.11234 7.4644 3.13472L19.46 3.45893L19.1358 15.4545C19.1134 16.2827 19.7666 16.9721 20.5947 16.9945C21.4229 17.0169 22.1123 16.3637 22.1347 15.5356L22.4995 2.04053ZM3.03162 21.0889L22.0316 3.08893L19.9684 0.911071L0.968383 18.9111L3.03162 21.0889Z" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

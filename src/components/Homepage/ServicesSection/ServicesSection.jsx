import React from "react"

import "./ServicesSection.scss"
import Heading from "../../shared/Heading"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import {
  DataEngineering,
  ProductDesign,
  ProductStrategy,
  SoftwareDevelopment,
} from "../SVGs"
export default function ServicesSection() {
  const serviceCardsData = [
    {
      id: 1,
      heading: "Product Strategy",
      text: "Create cutting-edge digital products, winning strategies, and make room for innovation in your organization.",
      icon: <ProductStrategy />,
      nav: "/product-strategy",
    },
    {
      id: 2,
      heading: "Product Design",
      text: "Build stunning, brand-aware applications that focus on your users while also generating revenue.",
      icon: <ProductDesign />,
      nav: "/product-design",
    },
    {
      id: 3,
      heading: "Custom Software Development",
      text: "Create successful strategies, launch exceptional digital products, gain more users, and meet your long-term objectives.",
      icon: <SoftwareDevelopment />,
      nav: "/custom-software-development",
    },
    {
      id: 4,
      heading: "Data Engineering",
      text: "Enhance your mobile and web applications, improve customer service, and automate your business operations.",
      icon: <DataEngineering />,
      nav: "/data-engineering",
    },
  ]

  const animateTimes = [
    {
      delay: "0",
      duration: "1000",
    },
    {
      delay: "250",
      duration: "750",
    },
    {
      delay: "400",
      duration: "600",
    },
    {
      delay: "0",
      duration: "1000",
    },
  ]
  return (
    <div className="services-section">
      <div className="container">
        <div className="row g-3 align-items-center">
          <div
            className="col-lg-6"
            // data-aos="fade-right"
            // data-aos-duration="1000"
            // data-aos-delay="250"
          >
            <Heading variant="48">
              All-In-One Development Services For Business Leaders
            </Heading>
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <div className="text">
              Concentrate on the big picture and leave the details to us. From
              business strategy based on deep market research to the most
              advanced tech, we can turn your idea into a cutting-edge solution.
              All in one place.
            </div>
          </div>
        </div>
        <div className="row g-4 service-section-cards">
          {serviceCardsData.map((item, i) => {
            return (
              <div
                className="col-md-4 col-sm-6 col-12"
                key={item.id}
                onClick={() => {
                  return navigate(item.nav)
                }}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration={animateTimes[i].duration}
                data-aos-delay={animateTimes[i].delay}
              >
                <div className="service-section-card">
                  <div className="icon-img">{item.icon}</div>
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
          <div
            className="col-md-4 col-sm-6 col-12"
            onClick={() => {
              return navigate("/services")
            }}
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="750"
            data-aos-delay="250"
          >
            <div className="service-section-card d-flex flex-column justify-content-center">
              <div className="d-flex flex-column justify-content-center">
                <div className="heading-2 text-center ">View All Services</div>
              </div>
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
        </div>
      </div>
    </div>
  )
}

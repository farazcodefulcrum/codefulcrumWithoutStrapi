import React from "react"

import Heading from "../Heading"
import ContactForm from "./ContactForm"
import "./Footer.scss"
export default function ContactUs() {
  return (
    <div className="contact-us-services" id="about_us_section">
      <div className="container position-relative">
        <a
          href="#top"
          className="scroll-top"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1400"
          data-aos-delay="200"
        >
          <img src="/top-scroll.svg" alt="" className="img-fluid" />
        </a>
        <div className="row">
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <Heading variant="52" className="pb-2">
              Ready to get started?
            </Heading>
            <div className="text">
              Get in touch and our team will be right with you!
            </div>
          </div>
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

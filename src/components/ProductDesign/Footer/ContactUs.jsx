import React from "react"
import Heading from "../../shared/Heading"
import ContactForm from "./ContactForm"
import "./Footer.scss"
export default function ContactUs({ type }) {
  return (
    <div className="contact-us-product-design">
      <div className="container position-relative">
        <a href="#top" className="scroll-top">
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
            <div className="text">Fill in to get a free quote</div>
          </div>
          <div
            className="col-12"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1400"
            data-aos-delay="200"
          >
            <ContactForm type={type} />
          </div>
        </div>
      </div>
    </div>
  )
}

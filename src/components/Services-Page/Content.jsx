import React from "react"
import { images } from "../../../static/index"
import ServicesHeroSection from "./ServicesHeroSection"
import "./Services.scss"
import QuickProject from "./QuickProject"
import DualColContent from "./DualColContent"
import DileveryProcess from "./DeliveryProcess"
import PriceServices from "./PriceServices"
import ServiceAccordian from "./ServicesAcordian"
import Head from "../utils/Head"

function Services() {
  return (
    <div className="services-box">
      <Head title="Services" />

      <ServicesHeroSection
        btnText="BOOK A CALL!"
        img={images.services.ServicesHero}
        scroll="#dualcontent"
      >
        <p className="header-p-1">Complete Spectrum of Software</p>
        <p className="header-p-2"> Development & Consultancy Services</p>
      </ServicesHeroSection>

      <DualColContent />
      <DileveryProcess />
      <QuickProject />
      <PriceServices />
      <div className="contact-accordian-bg">
        <ServiceAccordian />
      </div>
    </div>
  )
}
export default Services

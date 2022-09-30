import React from "react"
import { images } from "../../../static/index"
import { Frame } from "./SVGs"
import Hero from "./Hero"
import DevelpmentServices from "./DevelpmentServices/DevelopmentServices"
import "./CustomSoftware.scss"
import WorkSwiper from "../../components/Homepage/WorkSwiper"
import CustomSoftware from "./CustomSoftware/Content"
import ClientSection from "../ProductDesign/ClientSection"
import ServicesSection from "./ServicesSection"
import ContactUs from "../ProductDesign/Footer/ContactUs"

import Reviews from "../../components/Homepage/Reviews"
import Accordian from "./FAQs/Accordian"
import Head from "../utils/Head"
function CustomSoftwareContent() {
  return (
    <div>
      <Head title="Custom Software Development" />

      <Hero
        id="top"
        btnText="SHARE YOUR REQUIREMENTS"
        img={images.portfolio.PortfolioHero}
        header="Transform Your Ideas Into Exceptional Digital Products"
        text="Let us know your requirements, and we will propose the best solution, select the technology, create the product, and take care of its subsequent maintenance. We guarantee high-quality products delivered on time, scope, and budget."
        scroll="#d-services"
      />
      <DevelpmentServices />
      <WorkSwiper />
      <CustomSoftware />
      <ClientSection />
      <Reviews />
      <ServicesSection />
      <Accordian />
      <ContactUs type="CustomSoftware" />
    </div>
  )
}

export default CustomSoftwareContent

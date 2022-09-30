import React from "react"
import Hero from "./Hero"
import Services from "./services/Content"
import CustomSoftware from "./CustomSoftware/Content"
import StrategyConsultation from "./StrategyConsultation"
import BusinessStrategy from "./BssinessStrategy/BusinessStrategy"
import Estimate from "./Estimate"
import ServicesSection from "./ServicesSection"
import Accordian from "./FAQs/Accordian"
import ContactUs from "../ProductDesign/Footer/ContactUs"
import Head from "../utils/Head"
 function ProductStrategy() {
  return (
    <div>
<Head title="Product Strategy" />

      <Hero
        id="top"
        btnText="BOOK A CALL"
        header="Verify Your Concepts, Test And Optimize Your Existing Products, And Ensure That Your Business Is On The Right Track"
        scroll="#services"
      />
      <Services />
      <CustomSoftware />
      <StrategyConsultation />
      <BusinessStrategy />
      <Estimate />
      <ServicesSection />
      <Accordian />
      <ContactUs type="ProductStrategy" />
    </div>
  )
}

export default ProductStrategy

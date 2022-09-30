import React, { useEffect } from "react"
import Hero from "./Hero"
import EngineeringServices from "./EngineeringServices"
import EngineeringBenefits from "./EngineeringBenefits/EngineeringBenefits"
import Workflow from "./Workflow/Workflow"
import WorkContent from "./Workflow/WorkWithUs/WorkContent"
import WorkSwiper from "../../components/Homepage/WorkSwiper"
import Accordian from "./FAQs/Accordian"
import ContactUs from "../ProductDesign/Footer/ContactUs"
import ServicesSection from "./ServicesSection"
import Head from "../utils/Head"

function DataEngContent() {
  return (
    <div>
      <Head title="Data Engineering" />

      <Hero
        id="top"
        btnText="LET'S DISCUSS HOW"
        text="We assist your company in moving to the next level of data utilization, management, and automation."
        header="Increase Your Operational Efficiency By Analyzing Large Datasets"
        scroll="#e-services"
      />
      <EngineeringServices />
      <EngineeringBenefits />
      <Workflow />
      <WorkContent />
      <WorkSwiper />
      <ServicesSection />
      <Accordian />
      <ContactUs type="DataEng" />
    </div>
  )
}

export default DataEngContent

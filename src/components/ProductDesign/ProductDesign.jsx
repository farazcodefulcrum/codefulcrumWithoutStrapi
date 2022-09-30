import React from "react"
import Hero from "./Hero"
import "./ProductDesign.scss"
import DesignDefinition from "./DesignDefinition"
import DesignTabs from "./DesignTabs/DesignTabs"
import DesignSprints from "./DesignSprints"
import PartnersSection from "./PartnerSection/PartnersSection"
import WorkSwiper from "../Homepage/WorkSwiper"
import ClientSection from "./ClientSection"
import Reviews from "../Homepage/Reviews"
import ServicesSection from "./ServicesSection"
import Accordian from "./FAQs/Accordian"
import ContactUs from "./Footer/ContactUs"
import ImageSwiper from "./WorkSwiper"
import Head from "../utils/Head"
function ProductDesign() {
  return (
    <div>
      <Head title="Product Design" />

      <Hero
        id="top"
        header="Design Unique And Creative Digital Products Tailored To Your Needs"
        text1="We provide product design and strategy services to companies of
        all shapes and sizes"
        text2="– Tell us what, and we’ll show you how."
        btnText="LET’S SCHEDULE A CALL"
        scroll="#design-pics"
      />
      <ImageSwiper />
      <DesignDefinition />
      <DesignTabs />
      <DesignSprints />
      <PartnersSection />
      <WorkSwiper />
      <ClientSection />
      <Reviews />
      <ServicesSection />
      <Accordian />
      <ContactUs type="ProductDesign" />
    </div>
  )
}

export default ProductDesign

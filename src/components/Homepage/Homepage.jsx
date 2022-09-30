import React from "react"

import CharacterReveal from "./CharacterReveal/CharacterReveal"
import { images } from "../../../static/index"
import Hero from "../shared/Hero"
import ClientSection from "./ClientSection"
//import AboutUsSection from "./AboutUsSection"
//import ServicesSection from "./ServicesSection"
// import WorkSwiper from "./WorkSwiper"
//import QuickProject from "./QuickProject"
//import PartnerSection from "./PartnerSection"
import Reviews from "./Reviews"
import ContactUs from "../shared/Footer/ContactUs"
import Scroll from "../../components/utils/Scroll"

//const ClientSection = React.lazy(() => import("./ClientSection"))
const AboutUsSection = React.lazy(() => import("./AboutUsSection"))
const ServicesSection = React.lazy(() => import("./ServicesSection"))
const WorkSwiper = React.lazy(() => import("./WorkSwiper"))
const PartnerSection = React.lazy(() => import("./PartnerSection"))
const QuickProject = React.lazy(() => import("./QuickProject"))

export default function Homepage() {
  const isSSR = typeof window === "undefined"

  return (
    <>
      <Hero
        id="top"
        social={true}
        btnText="BOOK A MEETING"
        img={images.homepage.HeroHomeImg}
        text="Whether you’re a Startup, SME, or an Enterprise - we will create a dedicated solution for you based on the analysis of your business and the latest technologies."
        scroll="#about_us_section"
      >
        <div style={{ display: "inline-block" }}>
          {"We "}
          <div
            style={{
              display: "inline-block",

              position: "relative",
            }}
          >
            {<CharacterReveal />}

            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
              }}
            >
              <img
                src={images.homepage.HeroUnderline}
                alt=""
                style={{
                  width: "18rem",
                  height: "auto",
                }}
              />
            </div>
          </div>
          <br />
          Impactful Digital Solutions
        </div>
      </Hero>
      {/* {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSection />
        </React.Suspense>
      )} */}
      <ClientSection />
      {/* <Loading /> */}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <AboutUsSection />
        </React.Suspense>
      )}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ServicesSection />
        </React.Suspense>
      )}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <WorkSwiper />
        </React.Suspense>
      )}
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <PartnerSection />
        </React.Suspense>
      )}

      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <QuickProject />
        </React.Suspense>
      )}

      <Reviews />
      <ContactUs />
    </>
  )
}

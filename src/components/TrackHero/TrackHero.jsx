import React from "react"
import Hero from "./Hero"
import AboutProject from "./AboutProject"
import LegacyFixes from "./LegacyFixes"
import Versions from "./Versions"
import Features from "./Features"
import SPA from "./SPA"
import TechStack from "./TechStack"
import "./TrackHero.scss"
import WorkSwiper from "../OhmConnect/WorkSwiper"
import Estimate from "../ProductStrategy/Estimate"
import Head from "../utils/Head"

function TrackHero() {
  return (
    <div>
      <Head title="TrackHero" />

      <Hero header="From Nurturing The Legacy MVP to Launching TrackHero 2.0" />
      <AboutProject />
      <LegacyFixes />
      {/* <Versions /> */}
      <Features />
      <Estimate />
      <SPA />
      <TechStack />
      <WorkSwiper />
    </div>
  )
}

export default TrackHero

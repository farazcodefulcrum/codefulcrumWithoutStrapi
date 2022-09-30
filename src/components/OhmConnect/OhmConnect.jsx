import React from "react"
import Hero from "./Hero"
import AboutProject from "./AboutProject"
import Team from "./Team"
import Collabrations from "./Collabrations/Collabrations"
import Features from "./Features"
import Integrations from "./Integrations"
import OhmHour from "./OhmHour"
import OriginSpike from "./OriginSpike"
import Webflow from "./Webflow"
import TechStack from "./TechStack"
import WorkSwiper from "./WorkSwiper"
import "./OhmConnect.scss"
import Estimate from "../ProductStrategy/Estimate"

import Head from "../utils/Head"

function OhmConnect() {
  return (
    <div>
      <Head title="OhmConnect" />

      <Hero header="Save Energy, Get Paid" />
      <AboutProject />
      <Team />
      <Collabrations />
      <Features />
      <Integrations />
      <OhmHour />
      <Estimate />

      <OriginSpike />
      <Webflow />
      <TechStack />
      <WorkSwiper />
    </div>
  )
}

export default OhmConnect

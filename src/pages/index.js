import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assests/styles/base.scss";
import { Router, useLocation } from "@reach/router";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import Services from "../components/Services-Page";
import ProductStrategy from "../components/ProductStrategy";
import ProductDesign from "../components/ProductDesign";
import CustomSoftwareDevelopment from "../components/CustomSoftwareDevelopment";
import DataEngineering from "../components/DataEngineering";
import ThankyouPage from "../components/ThankyouPage";
import Terms from "../components/Contract/T&C";
import Policy from "../components/Contract/Policy";
import TrackHero from "../components/TrackHero";
import OhmConnect from "../components/OhmConnect";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "../components/Homepage";
import Portfolio from "../components/Portfolio-Page";
import { AnimatedCursor } from "../components/utils/AnimatedCursor";
import { withPrefix } from "gatsby";
import Head from "../components/utils/Head";
export default function Home() {
  const useLoc = useLocation();
  useEffect(() => {
    AOS.init();
  }, []);

  React.useEffect(() => {
    if (document !== "undefined" && window !== "undefined") {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = "https://widget.clutch.co/static/js/widget.js";
      script.async = true;
      document.body.appendChild(script);
      // run script
      script.onload = () => {
        window.CLUTCHCO.Init();
      };
      return () => {
        window.CLUTCHCO.Destroy();
        document.body.removeChild(script);
      };
    }
  }, [useLoc.pathname]);

  return (
    <Layout>
      {<Head title="codeFulcrum" />}

      <AnimatedCursor
        innerSize={16}
        outerSize={16}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.8}
        outerScale={4}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          ".swiper-pagination-bullet",
        ]}
      />
      <Router basepath={withPrefix("/")}>
        <Homepage path="/" />
        <Portfolio path="/portfolio" />
        <AboutUs path="/about-us/" />
        <ContactUs path="/contact/" />
        <Services path="/services/" />
        <ProductStrategy path="/product-strategy/" />
        <ProductDesign path="/product-design/" />
        <CustomSoftwareDevelopment path="/custom-software-development/" />
        <DataEngineering path="/data-engineering/" />
        <ThankyouPage path="/thank-you/" />
        <Terms path="/terms-of-use/" />
        <Policy path="/privacy-policy/" />
        <TrackHero path="/casestudy/track-hero/" />
        <OhmConnect path="/casestudy/ohm-connect/" />
      </Router>
    </Layout>
  );
}

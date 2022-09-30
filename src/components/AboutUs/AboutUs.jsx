import React from "react"
import Hero from "./Hero"
import UsersWorldwide from "./UsersWorldwide"
import LeadershipTeam from "./LeadershipTeam/LeadershipTeam"
import ImageGallery from "./ImageGallery/ImageGallery"
import CoreValues from "./CoreValues/CoreValues"
import Reviews from "../../components/Homepage/Reviews"
import ContactUs from "../shared/Footer/ContactUs"
import { Box } from "@mui/system"
import Head from "../utils/Head"
function AboutUs() {
  return (
    <div>
      <Head title="About Us" />
      <Hero
        id="top"
        btnText="LET'S DISCUSS HOW"
        header="We Understand Your Business Needs, Study Your Customers And Build The Right Product"
        scroll="#users"
      />
      <UsersWorldwide />
      <LeadershipTeam />
      <ImageGallery />
      <CoreValues />
      <Reviews />
      {/* //pt={{ md: 22, sm: 16, xs: 16 }} */}
      <Box>
        <ContactUs />
      </Box>
    </div>
  )
}

export default AboutUs

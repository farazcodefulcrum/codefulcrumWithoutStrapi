import React from "react"
import Grid from "@mui/material/Grid"
import Heading from "../../shared/Heading"
import Text from "../../shared/Text"
function Introduction() {
  return (
    <div className="introduction-trackhero">
      <div className="content-intro">
        <div className="container" data-aos="fade-up" data-aos-duration="1000">
          <Text variant="18" className="text">
            TrackHero is a cloud-based platform designed to provide full
            visibility into your fleet and easy management of your experiential
            events and customers. They built their B2B SaaS solution with a
            vision to enable smoother workflows that make the job of dealership
            businesses a delight. It offers a centralized feature set for
            managing Events, Rentals, Fleets, and Customers with curated
            workflows catering to the needs of multiple actors who run these
            auto shows.
          </Text>
        </div>
      </div>

      <div className="content-problem">
        <div className="container ">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <div
                className="sub-header"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Problem Statement{" "}
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Heading variant="48" className="header">
                  Growth of the product with a customer-centric roadmap, aimed
                  at improving feature discoverability, usability, and
                  performance.
                </Heading>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Text variant="18" className="text">
                  Their goal was to transform tiring processes like scheduling
                  new events, managing rentals, onboarding event attendees and
                  offering a personalized experiential auto event, but extending
                  the MVP with new feature requests made the codebase harder to
                  maintain and they started facing scalability issues on the app
                  as the user base grew. This is where the TrackHero leadership
                  realized that they needed a performant web application that's
                  accessible to its users on every platform.
                </Text>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default Introduction

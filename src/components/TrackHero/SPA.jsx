import React from "react"
import { Grid } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

function SPA() {
  return (
    <div className="spa-trackhero">
      <div className="content">
        <div className="container">
          <p className="header" data-aos="fade-up" data-aos-duration="1000">
            Product Design Strategy for Developing an Intuitive User Interface:
            A Web SPA
          </p>

          <Grid container>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              className="d-flex align-items-center"
            >
              <p
                className="text-spa"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                After new features development, now was the time to work on user
                experience since some of the features were not discoverable. To
                fix the usability issues and the lack of modern UI, our design
                team came up with a Product Design Strategy for a functional and
                delightful user interface. The strategy suggested switching from
                multi page to a single page application.
              </p>
            </Grid>
          </Grid>
        </div>
      </div>

      <div className="container">
        <p className="text" data-aos="fade-up" data-aos-duration="1000">
          The dynamic loading of content on a single page web application
          creates a natural, fluid user experience, making the applications feel
          like native desktop or mobile applications.
        </p>
      </div>
      <div className="img-wrapper" data-aos="fade-up" data-aos-duration="1000">
        <StaticImage
          src="../../../static/trackHero/spa.png"
          placeholder="none"
          formats={["auto", "webp", "avif"]}
          alt="img"
          objectFit="contain"
        />
      </div>
      <div className="bg-content">
        <div className="container">
          <div className="content-2">
            <p className="header" data-aos="fade-up" data-aos-duration="1000">
              Connecting Customers and Businesses with Mobile-first PWA
            </p>

            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <p className="text" data-aos="fade-up" data-aos-duration="1000">
                  The TrackHero product leadership found it challenging to bring
                  customer-requested features at a market competitive pace.
                  Hence, interested attendees not having direct online access to
                  the Events hosted on TrackHero.com was a stumbling block that
                  TrackHero encountered on the journey to moving forward.
                </p>
                <p className="text" data-aos="fade-up" data-aos-duration="1000">
                  CodeFulcrum Marketing team helped to design, develop, and
                  launch the new face of TrackHero for potential businesses
                  looking for a bespoke software to run experiential auto
                  events.
                </p>
                <p className="text" data-aos="fade-up" data-aos-duration="1000">
                  We designed the mobile-first PWA for Business Team Members and
                  Customers aka event attendees resulting in a satisfactory and
                  responsive UX.
                </p>
                <p className="text" data-aos="fade-up" data-aos-duration="1000">
                  Mobile-First Progressive Web applications can perform the same
                  functions as native programs, but through the internet
                  browser, and on the user's companion screens making the
                  accessibility easier and more convenient.
                </p>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <StaticImage
        src="../../../static/trackHero/PWA.png"
        placeholder="none"
        formats={["auto", "webp", "avif"]}
        alt="img"
        objectFit="contain"
      />
    </div>
  )
}

export default SPA

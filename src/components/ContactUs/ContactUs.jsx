import React from "react"
import Heading from "../shared/Heading"
import ContactForm from "./ContactForm"
import "./Footer.scss"
import "../shared/Hero/Hero.scss"
import { Grid } from "@mui/material"
import Head from "../utils/Head"
import { StaticImage } from "gatsby-plugin-image"

export default function ContactUs() {
  return (
    <div
      className="contact-us-main"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-center"
    >
      <Head title="Contact Us" />
      <div className="container position-relative">
        <div className="row">
          <div className="col-12">
            <Heading variant="52" className="pb-2">
              Ready to get started?
            </Heading>
            <div className="text">
              Get in touch and our team will be right with you!
            </div>
          </div>
          <Grid container className="col-12">
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              pr={{ md: 3, sm: 0, xs: 0 }}
              pt={{ md: 2.5, sm: 2, xs: 2 }}
              //  className="m-auto"
            >
              <ul className="sub-text pb-4">
                <li> We will respond to you within 24 hours.</li>
                <li> We’ll sign an NDA if requested.</li>
                <li>
                  You'll be talking to product and tech experts (no account
                  managers).
                </li>
              </ul>
              <div className="m-auto">
                <StaticImage
                  src="../../../static/contact-side.png"
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt="img"
                />
              </div>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              pl={{ md: 3, sm: 0, xs: 0 }}
              pt={{ md: 0, sm: 2.5, xs: 2.5 }}
            >
              <ContactForm />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}

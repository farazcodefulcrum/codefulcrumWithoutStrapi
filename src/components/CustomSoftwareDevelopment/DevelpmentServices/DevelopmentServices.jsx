import React from "react"
import "./DevelopmentServices.scss"
import { Frame } from "../SVGs"
import { Box } from "@mui/material"
import Heading from "../../shared/Heading"
import { Grid } from "@mui/material"
import DataColumn from "./DataColumn"
function DevelopmentServices() {
  const [hover, setHover] = React.useState(true)
  return (
    <div className="development-services-bg" id="d-services">
      <div className="frame-bg">
        <Frame />
        <div className="container">
          <Box px={{ md: 5, sm: 3, xs: 0 }} className="top-box">
            <div data-aos="fade-up" data-aos-duration="1200">
              <p className="header">
                Reach new heights with our custom software development services
              </p>
            </div>

            <Box px={{ md: 16, sm: 5, xs: 0 }}>
              <div data-aos="fade-up" data-aos-duration="1200">
                <p className="text">
                  Want to create a custom web or mobile application but don't
                  know where to begin? We've got your back. Leverage the full
                  potential of custom development to achieve your goals faster.
                  We provide business-centered solutions that are tailored to
                  each client's specific needs.
                </p>
              </div>
            </Box>
          </Box>
          <div data-aos="fade-up" data-aos-duration="1200">
            <Heading variant="48" className="header-bg">
              Software For Your <span className="heading-bg">Business</span>{" "}
              Needs
            </Heading>
          </div>
          <Box mr={{ md: 16, sm: 3, xs: 0 }}>
            <div data-aos="fade-up" data-aos-duration="1200">
              <p className="sub-header">
                Whether you’re a <span className="span-1">Startup, SME</span> or
                an <span className="span-2">Enterprise;</span> we help you
                clarify your needs and code your ideas into successful,
                market-ready products.
              </p>
            </div>
          </Box>
          <div className="cards-bg">
            <Grid
              container
              justifyContent="center"
              columnSpacing={2}
              rowSpacing={4}
            >
              <Grid item md={4} sm={12} xs={12}>
                <div data-aos="zoom-in" data-aos-duration="1200">
                  <Box
                    className="box-1"
                    px={{ md: 6, sm: 3, xs: 3 }}
                    py={{ md: 6, sm: 5, xs: 4 }}
                    onMouseEnter={() => {
                      setHover(false)
                    }}
                  >
                    <p className="header">Startups</p>
                    <p className="text">
                      We take your idea through prototyping to MVP development
                      to full-scale launch of your product.
                    </p>
                    <ol className="list">
                      <li>MVP creation and prototyping</li>
                      <li>Fast time-to-market</li>
                      <li>Advice on technology stack</li>
                    </ol>
                  </Box>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div data-aos="zoom-in" data-aos-duration="1200">
                  <Box
                    className={hover ? "box-hover" : "box-2"}
                    px={{ md: 6, sm: 3, xs: 3 }}
                    py={{ md: 6, sm: 4, xs: 4 }}
                  >
                    <p className="header">Enterprises</p>
                    <p className="text">
                      We have over a decade of experience ensuring success of
                      large enterprises’ tech initiatives.
                    </p>
                    <ol>
                      <li> Modernisation of legacy software</li>
                      <li>Interdepartmental workflows</li>
                      <li>Regulatory compliance</li>
                      <li>Dedicated support team </li>
                    </ol>
                  </Box>
                </div>
              </Grid>
              <Grid item md={4} sm={12} xs={12}>
                <div data-aos="zoom-in" data-aos-duration="1200" s>
                  <Box
                    className="box-3"
                    px={{ md: 6, sm: 3, xs: 3 }}
                    py={{ md: 6, sm: 4, xs: 4 }}
                    onMouseEnter={() => {
                      setHover(false)
                    }}
                  >
                    <p className="header">SMEs</p>
                    <p className="text">
                      We work with you to define, visualize, and build software
                      tailored to your business needs.
                    </p>
                    <ol className="list">
                      <li> Business need analysis</li>
                      <li> Early risk mitigation</li>
                      <li> Flexibility and scalability</li>
                      <li> Budgetary control</li>
                    </ol>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <DataColumn />
    </div>
  )
}

export default DevelopmentServices

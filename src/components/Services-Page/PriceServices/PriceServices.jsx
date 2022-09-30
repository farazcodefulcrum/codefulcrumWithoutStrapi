import { Grid, Box } from "@mui/material"
import Heading from "../../shared/Heading"
import React from "react"
import "./PriceServices.scss"
import {
  PriceServices1,
  PriceServices2,
  PriceServices3,
  PriceServices4,
} from "../SVGs"
import Estimate from "./Estimate"
function PriceServices() {
  return (
    <div>
      <Box mt={20} pt={10} className="price-services">
        <div className="py-5 container">
          <Grid container className="m-auto">
            <Grid item md={6} className="m-auto">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
              >
                <Heading variant="48">How we price our services</Heading>
              </div>
            </Grid>
            <Grid item md={6} className="m-auto">
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="bottom-bottom"
              >
                <p className="text">
                  We offer the quotations for our services depending upon the
                  scope, nature, complexity and requirement of the project.
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container className="m-auto" pt={1}>
            <div className="background-img m-auto">
              <Grid container className="m-auto">
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={4}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                  pr={{ md: 3, sm: 3, xs: 3 }}
                  className="side-img"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <PriceServices1 />
                  </div>
                </Grid>
                <Grid item md={7} sm={5} xs={8} mt={{ md: 9, sm: 7, xs: 2 }}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="header-1">Technical Complexity</p>
                    <p className="text">
                      The development process of the product is made more
                      complex, time-consuming, and expensive by complex design
                      specification and advanced features.
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="m-auto">
                <Grid
                  item
                  md={5}
                  sm={5}
                  xs={4}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                  pr={{ md: 3, sm: 3, xs: 3 }}
                  className="side-img"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <PriceServices2 />
                  </div>
                </Grid>
                <Grid item md={7} sm={5} xs={8} mt={{ md: 9, sm: 7, xs: 2 }}>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <p className="header-1">Third-Party Integrations</p>
                    <p className="text">
                      Software development costs are also affected by
                      third-party systems like payment gateway, maps, ERPs, and
                      CRMs.
                    </p>
                  </div>
                </Grid>
              </Grid>
              <Grid container className="m-auto">
                <Grid
                  item
                  md={8}
                  sm={12}
                  xs={12}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                  className="side-img"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <PriceServices3 />
                  </div>
                  <Box ml={4}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="header-1">Features & Functionalities</p>
                      <p className="text">
                        The most important cost driver is the number of features
                        you want. Screens, buttons, fields involved, and the
                        amount of logic required can change costs drastically.
                      </p>
                    </div>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={0}
                  xs={7}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                ></Grid>
              </Grid>

              <Grid container className="m-auto">
                <Grid
                  item
                  md={8}
                  sm={12}
                  xs={12}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                  className="side-img"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-anchor-placement="bottom-bottom"
                  >
                    <PriceServices4 />
                  </div>
                  <Box ml={4}>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-anchor-placement="bottom-bottom"
                    >
                      <p className="header-1">Custom Design</p>
                      <p className="text">
                        Custom user interface are rather complex to design and
                        implement accurately. Therefore, they often cause the
                        cost of software development to increase.
                      </p>
                    </div>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={0}
                  xs={0}
                  mt={{ md: 9, sm: 7, xs: 2 }}
                ></Grid>
              </Grid>
            </div>
          </Grid>
        </div>
      </Box>
      <Estimate />
    </div>
  )
}

export default PriceServices

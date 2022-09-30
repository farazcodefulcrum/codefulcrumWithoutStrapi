import React from "react"

import Text from "../shared/Text"
import Heading from "../shared/Heading"
import { Grid, Box } from "@mui/material"
import { images } from "../../../static/index"
import { Arrow } from "./SVGs"
import ArrowIcon from "../shared/Footer/DropDownIcon"
import { DropdownArrow, DropdownArrowWhite } from "./SVGs"
import Accordian from "./Accordian"
import "./Services.scss"
import { ProductStrategy, ProductDesign, CustomSoftware, DataEng } from "./SVGs"
export default function DualColumnImageAndContent({}) {
  const dualColData = [
    {
      id: 0,
      img: <ProductStrategy />,
      headingLeft: ["Product", "Strategy"],
      textLeft:
        "Create cutting-edge digital products, winning strategies, and make room for innovation in your organization.",

      accordianData: [
        {
          id: 1,
          header: "Discovery Workshop",
          text: "2 weeks collaborative workshop to define your idea from business perspectives.",
        },
        {
          id: 2,
          header: "Sprint Zero",
          text: "1 week kick off sprint for those who already have all application designs ready.",
        },
        {
          id: 3,
          header: "Design Sprint",
          text: "1 week sprint for professional design consultation and architectural advice.",
        },
      ],
      url: "/product-strategy",
    },
    {
      id: 2,
      img: <ProductDesign />,
      headingLeft: ["Product", "Design"],
      textLeft:
        "Build stunning, brand-aware applications that focus on your users while also generating revenue.",

      accordianData: [
        {
          id: 1,
          header: "User Research",
          text: "Before we get our hands dirty, we conduct thorough research to develop your user personas and outline your products’ whole customer journey.",
        },
        {
          id: 2,
          header: "UI/UX",
          text: " We construct prototypes and put our ideas to the test with real people. Combination of user experience design with the latest technology to create compelling experiences that solve business problems and make people happy.",
        },
        {
          id: 3,
          header: "Usability Testing",
          text: "We collaborate with our clients to create products that solve real-world consumer demands. This emphasis on human-centered design means the products we create provide captivating experiences.",
        },
      ],
      url: "/product-design",
    },
    {
      id: 3,
      img: <CustomSoftware />,
      headingLeft: ["Custom", "Software", "Development"],
      textLeft:
        "Create successful strategies, launch exceptional digital products, gain more users, and meet your long-term objectives.",

      accordianData: [
        {
          id: 1,
          header: "Web & Mobile App Development",
          text: "Custom tailored Web & Mobile apps that build impact.",
        },
        {
          id: 2,
          header: "DevOps",
          text: "Incorporate the entire software application lifecycle, from development to operations.",
        },
        {
          id: 3,
          header: "QA & Testing",
          text: "Improving quality of your software without affecting your delivery timeframe.",
        },
      ],
    },
    {
      id: 4,
      img: <DataEng />,
      headingLeft: ["Data", "Engineering"],
      textLeft:
        "Enhance your mobile and web applications, improve customer service, and automate your business operations.",

      accordianData: [
        {
          id: 1,
          header: "Data Analytics",
          text: "Adopt data driven insights for your business with a consolidated view of important data.",
        },
        {
          id: 2,
          header: "Reporting Automation  ",
          text: "Speed up your decision making with the help of automated reporting.",
        },
        {
          id: 3,
          header: "Big Data Processing",
          text: "Enable your organization to use the full potential of its data.",
        },
      ],
      url: "/data-engineering",
    },
  ]
  return (
    <div>
      <div className="bg-cf-services py-5 dual-col-content" id="dualcontent">
        <div className="container">
          <Grid
            container
            mt={{ lg: 12, sm: 8, xs: 6 }}
            mb={{ lg: 8, sm: 5, xs: 3 }}
          >
            <Grid container>
              <Grid item md={6} xs={12} className="m-auto">
                <Grid container className="d-flex justify-content-center">
                  <Grid item md={12}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                      <Heading variant="48">
                        Solve Your Toughest Challenges
                      </Heading>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} xs={12} justifyContent="center">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Text variant="22" className="p-left">
                    As a full-service software house, with us, you can rest
                    assured that your project will be given the attention it
                    deserves at every stage, from comprehensive market research
                    to continuing support after launch.
                    <br></br> <br></br> Allow us to assist your product in
                    conquering markets and edging out the competition; see what
                    we can do for you and your business!
                  </Text>
                </div>
              </Grid>
            </Grid>
            {dualColData.map((data, i) => (
              <div
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="top-center"
              >
                <Grid
                  container
                  justifyContent="space-between"
                  mt={{ lg: 16, sm: 12, xs: 6 }}
                  key={i}
                >
                  <div className="divider"></div>
                  <Grid item md={6} xs={12} className="m-auto">
                    <Grid container justifyContent="center">
                      <Grid item md={10} className="d-flex" xs={9}>
                        <Box
                          ml={{ xs: -4, sm: -2, xs: 0 }}
                          className="side-img-services"
                        >
                          {data.img}
                        </Box>

                        <Box
                          className="side-img-content"
                          pl={{ md: 3.5, sm: 0, xs: 0 }}
                          mt={-2}
                          mb={{ lg: 0, sm: 3, xs: 2 }}
                        >
                          <Heading variant="42">
                            {data.headingLeft.map((item, i) => {
                              return (
                                <p className="heading-1" key={i}>
                                  {item} <br></br>
                                </p>
                              )
                            })}
                          </Heading>
                          <p className="sub-paragraph">{data.textLeft}</p>
                        </Box>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                    justifyContent="right"
                    pl={{ lg: 16, sm: 0, xs: 0 }}
                  >
                    <Accordian
                      data={data.accordianData}
                      url={data.url}
                      index={i}
                    />
                  </Grid>
                </Grid>
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  )
}

import React, { useState, useEffect } from "react"
import "./DevelopmentServices.scss"
import { Grid } from "@mui/material"
import Heading from "../../shared/Heading"

function DataColumn() {
  const [width, setWidth] = useState(null)

  const updateDimensions = () => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }
  useEffect(() => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }, [])
  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateDimensions)
      return () => window.removeEventListener("resize", updateDimensions)
    }
  }, [width])
  const colData = [
    {
      id: 1,
      leftHeader: true,
      header: "Product Strategy Workshops",
      subText: "Sharpening your vision and learning about your goals",
      text: "The strategy consulting workshops are dynamic and need active engagement from both parties to ensure that your business goals and the end user's expectations are the center of attention. We define the business, user, and system requirements using modern tools and practices. Workshops are essential for kicking off any project and ensuring expectations are aligned from the start of any partnership.",
    },
    {
      id: 2,
      leftHeader: false,
      header: "UI/UX",
      subText: "Unique and creative design",
      text: "After the custom-tailored workshops, together we work on user personas and customer journeys, and wireframe all the essential features. A clickable prototype is made to clearly show what your product can do, which helps to test ideas with users or entice stakeholders to invest. With every user interaction, we validate our assumptions to reduce potential risks and deliver a set of features that will accomplish your business goals.",
    },
    {
      id: 3,
      leftHeader: true,
      header: "Front End Development",
      subText: "Storyboarding and wireframing",
      text: "Once the designs are finalized we move on to coding your frontend solution. We pride ourselves in custom applications that work on every screen: from tiny mobile screens to large kiosk devices using the best RWD patterns.",
    },
    {
      id: 4,
      leftHeader: false,
      header: "Back End Development",
      subText: "Bringing your application idea into reality",
      text: "This is where we set up the backend architecture of your application. On average, it takes us up to 3 months to create a fully functional MVP - a minimum viable product. However, the final development time depends on the app’s scope and complexity.",
    },
    {
      id: 5,
      leftHeader: true,
      header: "QA & Testing",
      subText: "Ensuring smooth running of the application",
      text: "We take pride in the quality of our service, which means that our QA testers are an essential part of the team from the beginning of the project, assisting in the development of a safe, secure, and reliable digital product. Before any real user gets to access the platform, we put the app through intensive stress testing to guarantee that your product performs as required across all platforms and operating systems.",
    },

    {
      id: 7,
      leftHeader: false,
      header: "Product Release",
      subText: "Launching your app to the market",
      text: "With the MVP ready there’s nothing left to do but to see how your app performs with real users! We’ll take care of the deployment and release, making sure that every individual part of the system is delivered on schedule and works smoothly, without any downtime. ",
    },
    {
      id: 8,
      leftHeader: true,
      header: "Maintenance & Support",
      subText: "Taking good care of your product",
      text: "Your custom digital product is released, but our cooperation doesn’t necessarily end here. We pride ourselves in building long lasting partnerships. If you’d like to upgrade your product with some additional features over time, if there is a particular enhancement that you’d like to try out or if you simply want us to take care of maintenance and support, we’re always happy to help!",
    },
  ]
  return (
    <div className="data-col-wrapper-services">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1200">
          <Grid
            container
            py={{ md: 20, sm: 13, xs: 15 }}
            pb={{ md: 12, sm: 8, xs: 5 }}
          >
            <Grid item md={6} sm={6} xs={12} pr={{ md: 14, sm: 8, xs: 0 }}>
              <Heading variant="48">
                Here’s how we build your custom software
              </Heading>
            </Grid>
            <Grid item md={6} sm={6} xs={12} className="m-auto">
              <p className="text">
                Our development team adopts an agile methodology, which allows
                them to focus on the priorities that will deliver the highest
                business value at each stage of the process.
              </p>
            </Grid>
          </Grid>
        </div>
        <div className="img-bg">
          <Grid container py={{ md: 8, sm: 4, xs: 2 }}>
            {width >= 600 &&
              colData.map(item => {
                return item.leftHeader ? (
                  <>
                    <Grid item md={4} sm={6} xs={12} className="header">
                      <div data-aos="zoom-in" data-aos-duration="1200">
                        <p className="sub-header">{item.header}</p>
                        <p className="sub-text">{item.subText}</p>
                      </div>
                    </Grid>
                    <Grid item md={8} sm={6} xs={12} className="text">
                      <div data-aos="zoom-in" data-aos-duration="1200">
                        {item.text}
                      </div>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid container>
                      <Grid item md={8} sm={6} xs={12} className="text-second">
                        <div data-aos="zoom-in" data-aos-duration="1200">
                          {item.text}
                        </div>
                      </Grid>

                      <Grid
                        item
                        md={4}
                        sm={6}
                        xs={12}
                        className="header-second"
                        px={{ md: 4, sm: 2, xs: 1 }}
                      >
                        <div data-aos="zoom-in" data-aos-duration="1200">
                          <p className="sub-header">{item.header}</p>
                          <p className="sub-text">{item.subText}</p>
                        </div>
                      </Grid>
                    </Grid>
                  </>
                )
              })}

            {width < 600 &&
              colData.map(item => {
                return (
                  <Grid item>
                    <div data-aos="zoom-in" data-aos-duration="1200">
                      <p className="mobile-header">{item.header}</p>
                      <p className="mobile-text">{item.subText}</p>
                      <p className="mobile-text">{item.text}</p>
                    </div>
                  </Grid>
                )
              })}
          </Grid>
        </div>
      </div>
    </div>
  )
}

export default DataColumn

import React, { useEffect, useState } from "react"
import "./QuickProject.scss"
import Heading from "../../shared/Heading"
import Button from "../../shared/Button"
import { Grid } from "@mui/material"
export default function QuickProject() {
  const dataCol = [
    {
      id: 1,
      number: "01",
      header: "Contact",
      top: true,
      text: "Share your project idea with us",
    },
    {
      id: 2,
      number: "02",
      header: "Analysis",
      top: false,
      text: "We will contact you to clarify your project requirements",
    },
    {
      id: 3,
      number: "03",
      header: "Proposal",
      top: true,
      text: "We will provide you with our free, non-binding bid or a tailored proposal",
    },
    {
      id: 4,
      number: "04",
      header: "Team",
      top: false,
      text: "We will assemble and prepare a team for your project",
    },
    {
      id: 5,
      number: "05",
      header: "Start",
      top: true,
      text: "We will introduce you to the team and start the project.",
    },
  ]
  function TriangleTop() {
    return (
      <img
        src="/homepage/triangleTop.svg"
        alt="arrow"
        style={{ height: "14px", width: "17px" }}
      />
    )
  }
  function TriangleBottom() {
    return (
      <img
        src="/homepage/triangleBottom.svg"
        alt="arrow"
        style={{ height: "14px", width: "17px" }}
      />
    )
  }
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

  return (
    <div className="quick-project-box">
      <div className="container">
        <div className="quick-project-inner">
          <div className="row">
            <div
              className="col-md-12"
              data-aos="fade-right"
              data-aos-delay="350"
              data-aos-duration="1000"
            >
              <Heading variant="48">
                Quick Project <br /> Kick-off
              </Heading>
            </div>
            <div className="col-md-12 d-flex py-5">
              {width >= 650 &&
                dataCol.map(item => {
                  return (
                    <div
                      key={item.id}
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      data-aos-duration="1000"
                      // data-aos-delay="300"
                    >
                      {item.top && (
                        <div className="time-line-top" key={item.id}>
                          <div className="wrapper">
                            <div className="circle">
                              <p>{item.number}</p>
                            </div>
                            <p className="header">{item.header}</p>
                            <TriangleTop />
                          </div>

                          <div className="divider"></div>
                          <p className="text">{item.text}</p>
                        </div>
                      )}
                      {!item.top && (
                        <div className="time-line-bottom" key={item.id}>
                          <div className="wrapper">
                            <p className="text">{item.text}</p>
                          </div>
                          <div className="divider"></div>
                          <TriangleBottom />
                          <p className="header">{item.header}</p>
                          <div className="circle">
                            <p>{item.number}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}

              {width < 650 && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="center-bottom"
                  data-aos-duration="1000"
                >
                  <Grid container className="quick-project-mobile">
                    {dataCol.map(item => {
                      return (
                        <Grid
                          container
                          direction={item.top ? "row" : "row-reverse"}
                          mt={6}
                          key={item.id}
                        >
                          <Grid item sm={5} xs={5}>
                            <div className="inner-div">
                              <div className="circle">
                                <p>{item.number}</p>
                              </div>
                              <p className="header">{item.header}</p>
                            </div>
                          </Grid>
                          <Grid
                            item
                            sm={7}
                            xs={7}
                            className="d-flex justify-content-center align-items-center"
                          >
                            <p className="text">{item.text}</p>
                          </Grid>
                        </Grid>
                      )
                    })}
                  </Grid>
                </div>
              )}
            </div>
            <div className="col-md-12">
              <div className="d-flex justify-content-end">
                <Button
                  variant="fill"
                  text="GET STARTED!"
                  className="mt-4"
                  href="/contact"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

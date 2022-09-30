import React from "react"
import "./Workflow.scss"
import { Grid } from "@mui/material"
function WorkflowContent() {
  const leftColData = [
    {
      id: 1,
      number: "01",
      heading: "Understanding business needs and technical requirements",
      text: "Firstly, our data engineering team carries out the workshops and discovery calls with potential end-users. Then, we get all the necessary information from the technical departments.",
    },
    {
      id: 2,
      number: "02",
      heading: "Analysis of existing and future data sources",
      text: "At this stage, it is essential to go through current data sources to maximize the value of data. You should identify multiple data sources from which structured and unstructured data may be collected. During this step, our experts will prioritize and assess them.",
    },
    {
      id: 3,
      number: "03",
      heading: "Building and implementing Data Lake and Pipelines",
      text: "Data Lakes are the most cost-effective alternatives for storing data. A data lake is a data repository system that stores raw and processed structured and unstructured data files. A system like stores flat, source, transformed, or raw files.",
    },
    {
      id: 4,
      number: "04",
      heading: "Automation and deployment",
      text: "The next step is one of the most important parts in data development consulting – DevOps. Our team develops the right DevOps strategy to deploy and automate the data pipeline.",
    },
  ]

  const centerColData = [
    {
      id: 1,
      number: "05",
      heading: "Testing",
      text: "Testing, measuring, and learning — are important at the last stage of the Data Engineering Process. DevOps automation is vital at this moment. Data Lakes could be established or accessed, using specific tools such as Hadoop or s3.",
    },
  ]

  return (
    <>
      <div className="workflow-wrapper">
        <div className="workflow-content-left">
          <Grid container className="container">
            {leftColData.map(item => {
              return (
                <Grid
                  item
                  md={6}
                  sm={6}
                  mb={{ md: 10, sm: 6, xs: 3 }}
                  key={item.id}
                >
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="d-flex">
                      <p className="header">{item.number}</p>
                      &nbsp;&nbsp;&nbsp;
                      <p className="header">{item.heading}</p>
                    </div>{" "}
                    <p className="text">{item.text}</p>
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>

        <Grid
          container
          className="container"
          justifyContent="center"
          mb={{ md: 20, sm: 13, xs: 5 }}
        >
          {centerColData.map(item => {
            return (
              <Grid item md={8} key={item.id}>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="d-flex  justify-content-lg-center">
                    <p className="header">{item.number}</p>
                    &nbsp;&nbsp;&nbsp;
                    <p className="header">{item.heading}</p>
                  </div>{" "}
                  <p className="text">{item.text}</p>
                </div>{" "}
              </Grid>
            )
          })}
        </Grid>
      </div>
    </>
  )
}

export default WorkflowContent

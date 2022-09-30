import React from "react"
import "./DataEngineering.scss"
import { Grid } from "@mui/material"
import Heading from "../shared/Heading"
import {
  StreamApp,
  BigData,
  DataInt,
  DataVisual,
  StatData,
  Reporting,
} from "./SVGs"

function EngineeringServices() {
  const servicesData = [
    {
      id: 1,
      name: ["Streaming", "Applications"],
      icon: <StreamApp />,
    },
    {
      id: 2,
      name: ["Big Data", "Processing"],
      icon: <BigData />,
    },
    {
      id: 3,
      name: ["Data", "Integration"],
      icon: <DataInt />,
    },
    {
      id: 4,
      name: ["Data", "Visualization"],
      icon: <DataVisual />,
    },
    {
      id: 5,
      name: ["Statistical Data", "Analysis"],
      icon: <StatData />,
    },
    {
      id: 6,
      name: ["Reporting"],
      icon: <Reporting />,
    },
  ]
  return (
    <div className="engineering-services" id="e-services">
      <div className="container">
        <Grid
          container
          pt={{ md: 18, sm: 10, xs: 10 }}
          pb={{ md: 8, sm: 4, xs: 2 }}
        >
          <Grid item md={12}>
            <div data-aos="fade-up" data-aos-duration="1000">
              <Heading variant="24" className="header">
                Providing comprehensive data engineering services to our
                clients. We want them to fully understand their data-related
                issues.{" "}
              </Heading>
            </div>
          </Grid>
          <Grid container pt={{ md: 10, sm: 6, xs: 3 }}>
            {servicesData.map(item => {
              return (
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={6}
                  pl={{ md: 18, sm: 8, xs: 4 }}
                  pt={{ md: 6, sm: 4, xs: 2 }}
                  key={item.id}
                >
                  <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="icon"> {item.icon}</div>
                    {item.name.map((item, i) => {
                      return (
                        <p
                          className={
                            i === 0 ? "service-name-1" : "service-name-2"
                          }
                          key={i}
                        >
                          {item}
                        </p>
                      )
                    })}
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default EngineeringServices

import { Grid } from "@mui/material"
import React from "react"
import "./PartnerSection.scss"
import { Column1 } from "../SVGs"
function DataColumn() {
  const colData = [
    {
      icon: "/productStrategy/u_user.png",
      header: "Expert Team Of Designers",
      text: "Our specialists at codeFulcrum combine know-how with years of experience to make the most of your idea. We research, prototype, test, create wireframes, and design the information architecture for your project using a set of experience design solutions tailored to your needs.",
    },
    {
      icon: "/productStrategy/u_users-alt.png",
      header: "Client-centered Approach",
      text: "Before we begin designing, we first discover your requirements and aspirations. We'll dig deep into your idea or existing product to determine the best ways to make it a success. A thorough understanding of your requirements will enable us to select the most appropriate UX tools and methods.",
    },
    {
      icon: "/productStrategy/u_search.png",
      header: "Transparency",
      text: "You'll know exactly how your project is progressing, who is working on it, what stage it is in, and how much more time is needed. Regular design sprints enable us to create the most effective UI/UX design while also adjusting the way our designers and their teams work if your situation changes.",
    },
    {
      icon: "/productStrategy/u_user.png",
      header: "Wide Range Of Services",
      text: "Our comprehensive set of services can guide you through the entire product design and development process. From ideation and strategy to UI/UX design and web & mobile development, you will end up with a complete, top-notch product that has the potential to dominate the market.",
    },
  ]
  return (
    <div className="container data-col-wrapper">
      <Grid
        container
        columnSpacing={{ md: 18, sm: 10, xs: 6 }}
        rowSpacing={{ md: 10, sm: 7, xs: 5 }}
        mt={{ md: 8, sm: 5, xs: 5 }}
        pb={{ md: 12, sm: 8, xs: 5 }}
      >
        {colData.map((item, i) => {
          return (
            <Grid item md={6} key={i}>
              {/* <Column1 /> */}
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1500"
              >
                <img src={item.icon} className="img"></img>
                <p className="header">{item.header}</p>
                <p className="text">{item.text}</p>
              </div>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default DataColumn

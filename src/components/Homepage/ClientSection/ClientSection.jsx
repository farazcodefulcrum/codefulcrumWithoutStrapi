import React from "react"
import { Grid } from "@mui/material"
import ImgWrapper from "./ImgWrapper"
import { images } from "../../../../static/index"
import "./ClientSection.scss"
import {
  Trackhero,
  Ohmconnect,
  Strada,
  Pixeleto,
  Vector,
  Driverbee,
  Aimexpert,
  IBD,
  Ugami,
  Hero,
  Rating,
  Energy,
  TrackheroHover,
  OhmconnectHover,
  StradaHover,
  PixeletoHover,
  VectorHover,
  DriverbeeHover,
  AimexpertHover,
  IBDHover,
  UgamiHover,
  HeroHover,
  RatingHover,
  EnergyHover,
} from "../SVGs"
export default function ClientSection() {
  const clientData = [
    {
      id: 1,
      img: <Trackhero />,
      hover: <TrackheroHover />,
      url: "/homepage/projects/trackhero.png",
    },
    {
      id: 2,
      img: <Ohmconnect />,
      hover: <OhmconnectHover />,
      url: "/homepage/projects/ohmconnect.png",
    },
    {
      id: 3,
      img: <Strada />,
      hover: <StradaHover />,
      url: "/homepage/projects/strada.png",
    },
    {
      id: 4,
      img: <Pixeleto />,
      hover: <PixeletoHover />,
      url: "/homepage/projects/pixeleto.png",
    },
    {
      id: 5,
      img: <Vector />,
      hover: <VectorHover />,
      url: "/homepage/projects/vector.png",
    },
    {
      id: 6,
      img: <Driverbee />,
      hover: <DriverbeeHover />,
      url: "/homepage/projects/driverbee.png",
    },
    {
      id: 7,
      img: <Aimexpert />,
      hover: <AimexpertHover />,
      url: "/homepage/projects/aimexpert.png",
    },
    {
      id: 8,
      img: <IBD />,
      hover: <IBDHover />,
      url: "/homepage/projects/IBD.png",
    },
    {
      id: 9,
      img: <Ugami />,
      hover: <UgamiHover />,
      url: "/homepage/projects/ugami.png",
    },
    {
      id: 10,
      img: <Hero />,
      hover: <HeroHover />,
      url: "/homepage/projects/hero.png",
    },
    {
      id: 11,
      img: <Rating />,
      hover: <RatingHover />,
      url: "/homepage/projects/rating.png",
    },
    {
      id: 12,
      img: <Energy />,
      hover: <EnergyHover />,
      url: "/homepage/projects/energy.png",
    },
  ]

  const animateTimes = [
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "0",
      duration: "1000",
    },
    {
      delay: "100",
      duration: "900",
    },
    {
      delay: "200",
      duration: "800",
    },
    {
      delay: "300",
      duration: "700",
    },
    {
      delay: "400",
      duration: "600",
    },

    {
      delay: "500",
      duration: "500",
    },
    {
      delay: "250",
      duration: "750",
    },
    {
      delay: "450",
      duration: "550",
    },
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "350",
      duration: "650",
    },
    {
      delay: "400",
      duration: "600",
    },
  ]

  const shuffledTimers = animateTimes.sort(() => Math.random() - 0.5)

  return (
    <div className="bg-cf-dark client-section">
      <div className="container py-2">
        <Grid
          container
          mt={1}
          pt={{ md: 2, sm: 4, xs: 6 }}
          pb={{ md: 2, sm: 4, xs: 4 }}
          rowSpacing={{ md: 9, sm: 5, xs: 4 }}
          justifyContent="center"
        >
          {clientData.map((item, i) => {
            return (
              <ImgWrapper
                clientData={item}
                key={item.id}
                shuffledTimers={shuffledTimers[i]}
                index={i}
              />
            )
          })}
        </Grid>
      </div>
    </div>
  )
}

import React from "react"
import { Grid } from "@mui/material"
import "./Images.scss"
import ImgWrapper from "./ImgWrapper"
import {
  Hammad,
  Hamza,
  Faizan,
  Mueeza,
  Ihtram,
  Sikander,
  HammadHover,
  HamzaHover,
  SikanderHover,
  IhtramHover,
  MueezaHover,
  FaizanHover,
} from "../SVGs"
function ImageGallery() {
  const data = [
    {
      id: 1,
      name: "Hammad Hussain",
      post: "Co-Founder & Chief Technology Officer",
      img: <Hammad />,
      hover: <HammadHover />,
    },
    {
      id: 2,
      name: "Hamza Munir",
      post: "Co-Founder & Chief Executive Officer",
      img: <Hamza />,
      hover: <HamzaHover />,
    },
    {
      id: 5,
      name: "Ihtram ul Haq",
      post: "Director of Engineering",
      img: <Ihtram />,
      hover: <IhtramHover />,
    },

    {
      id: 4,
      name: "Mueeza Jabbar",
      post: "Head of Human Resource",
      img: <Mueeza />,
      hover: <MueezaHover />,
    },
    {
      id: 3,
      name: "Faizan Khan",
      post: "Head of Design",
      img: <Faizan />,
      hover: <FaizanHover />,
    },
    {
      id: 6,
      name: "Sikandar Lak",
      post: "Head of Marketing",
      img: <Sikander />,
      hover: <SikanderHover />,
    },
  ]
  const animateTimes = [
    {
      delay: "0",
      duration: "1000",
    },
    {
      delay: "300",
      duration: "700",
    },
    {
      delay: "500",
      duration: "500",
    },
    {
      delay: "0",
      duration: "1000",
    },
    {
      delay: "300",
      duration: "700",
    },
    {
      delay: "500",
      duration: "500",
    },
  ]
  return (
    <div className="container gallery-wrapper">
      <Grid container columnSpacing={1} rowSpacing={5}>
        {data.map((person, i) => {
          return (
            <ImgWrapper
              person={person}
              key={person.id}
              animateTimes={animateTimes[i]}
            />
          )
        })}
      </Grid>
    </div>
  )
}

export default ImageGallery

import React from "react"
import "./NavBarTop.scss"
import { Grid } from "@mui/material"
import {
  ProductStrategy,
  ProductDesign,
  DataEng,
  CustomSoftware,
  ServicesSvg,
} from "./SVGs"
import ClickAwayListener from "@mui/base/ClickAwayListener"
import { Link } from "gatsby"
function dropDown({ onMouseLeave, onTouchEnd }) {
  const img = [
    {
      img: <ProductStrategy />,
      header: "Product Strategy",
      nav: "/product-strategy",
    },
    {
      img: <ProductDesign />,
      header: "Product Design",
      nav: "/product-design",
    },
    {
      img: <CustomSoftware />,
      header: "Custom Software Development",
      nav: "/custom-software-development",
    },

    { img: <DataEng />, header: "Data Engineering", nav: "/data-engineering" },
  ]

  return (
    <ClickAwayListener onClickAway={onMouseLeave}>
      <div
        className="nav-dropdown"
        onMouseLeave={onMouseLeave}
        //data-aos="fade-down"
        //data-aos-duration="500"
      >
        <div className="square"></div>
        <Grid container>
          <Grid item md={5} sm={12} className="services">
            <Link className="services-wrapper" to="/services">
              <div className="icon-wrapper">
                <ServicesSvg />
              </div>
              <div className="content">
                <div className="header">Services</div>
                <p className="text">
                  Complete Spectrum of Software Development & Consultancy
                  Services
                </p>
              </div>
            </Link>
          </Grid>
          <Grid item md={7} className="services-tabs">
            <Grid container rowSpacing={4} justifyContent="center">
              {img.map((item, i) => {
                return (
                  <Grid
                    item
                    md={6}
                    sm={6}
                    xs={12}
                    justifyContent="center"
                    key={i}
                  >
                    <Link
                      className="d-flex justify-content-center container-div"
                      to={item.nav}
                    >
                      <div className="icon-wrapper">{item.img}</div>

                      <p>{item.header}</p>
                    </Link>
                  </Grid>
                )
              })}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </ClickAwayListener>
  )
}

export default dropDown

import React from "react"
import "./CustomSoftware.scss"
import { StaticImage } from "gatsby-plugin-image"

function HeroWireDataEng() {
  return <img src="/productStrategy/hero-wire.svg" />
}
function Frame() {
  return (
    <StaticImage
      src="../.../../../../static/customSoftware/frame.png"
      placeholder="none"
      formats={["auto", "webp", "avif"]}
      alt="img"
    />
  )
}
function HeadingBg() {
  return <img src="/productStrategy/heading-bg.svg" />
}
function ProductStrategy() {
  return <img src="/productStrategy/productStrategy.svg" />
}
function ProductDesign() {
  return <img src="/productStrategy/productDesign.svg" />
}
function DataEngineering() {
  return <img src="/productStrategy/dataEngineering.svg" />
}

export {
  HeroWireDataEng,
  Frame,
  HeadingBg,
  ProductStrategy,
  ProductDesign,
  DataEngineering,
}

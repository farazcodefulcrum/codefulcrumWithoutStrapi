import React from "react"
import { ProductStrategy, ProductDesign, SoftwareDevelopment } from "../SVGs"
import ServicesSectionHook from "../../shared/ServicesSection"

export default function ServicesSection() {
  const serviceCardsData = [
    {
      id: 1,
      heading: "Product Strategy",
      text: "Create cutting-edge digital products, winning strategies, and make room for innovation in your organization.",
      icon: <ProductStrategy />,
      nav: "/product-strategy",
    },
    {
      id: 2,
      heading: "Product Design",
      text: "Build stunning, brand-aware applications that focus on your users while also generating revenue. ",
      icon: <ProductDesign />,
      nav: "/product-design",
    },
    {
      id: 3,
      heading: "Custom Software Development",
      text: "Create successful strategies, launch exceptional digital products, gain more users, and meet your long-term objectives.",
      icon: <SoftwareDevelopment />,
      nav: "/custom-software-development",
    },
  ]
  return (
    <div>
      <ServicesSectionHook data={serviceCardsData} />
    </div>
  )
}

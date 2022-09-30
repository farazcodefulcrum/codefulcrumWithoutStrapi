import React from "react"
import { ProductStrategy, ProductDesign, DataEngineering } from "../SVGs"
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
      heading: "Data Engineering",
      text: "Enhance your mobile and web applications, improve customer service, and automate your business operations. ",
      icon: <DataEngineering />,
      nav: "/data-engineering",
    },
  ]
  return (
    <div>
      <ServicesSectionHook data={serviceCardsData} />
    </div>
  )
}

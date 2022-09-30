import React from "react"
import { ProductDesign, DataEngineering, SoftwareDevelopment } from "../SVGs"
import ServicesSectionHook from "../../shared/ServicesSection"
export default function ServicesSection() {
  const serviceCardsData = [
    {
      id: 3,
      heading: "Custom Software Development",
      text: "Create cutting-edge digital products, winning strategies, and make room for innovation in your organization.",
      icon: <SoftwareDevelopment />,
      nav: "/custom-software-development",
    },
    {
      id: 4,
      heading: "Product Design",
      text: "Build stunning, brand-aware applications that focus on your users while also generating revenue. ",
      icon: <ProductDesign />,
      nav: "/product-design",
    },
    {
      id: 5,
      heading: "Data Engineering",
      text: "Enhance your mobile and web applications, improve customer service, and automate your business operations.",
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

import React, { useEffect, useState } from "react"

import PortfolioCard from "./PortfolioCard"
import "./Portfolio.scss"
import MultipleSelectFilter from "../shared/MultipleSelectFilter"
import Tabs from "./Tabs"
import ClickableChips from "./Chips"
export default function PortfolioCards({ cardData }) {
  const [industryList, setIndustryList] = React.useState([
    { id: 0, name: "Energy" },
    { id: 1, name: "Automotive" },
    { id: 2, name: "Artificial Intelligence" },
    { id: 3, name: "RealEstate" },
    { id: 4, name: "Advertising and Marketing" },
    { id: 5, name: "Financial Services" },
    { id: 6, name: "Transportation & Logistics" },
    { id: 7, name: "HealthCare" },
    { id: 30, name: "Gaming" },
  ])

  const [technologyList, settechnologyList] = React.useState([
    { id: 0, name: "Python" },
    { id: 1, name: "ReactJS" },
    { id: 14, name: "Django" },
    { id: 3, name: "Webflow" },
    { id: 8, name: "AWS" },
    { id: 4, name: "MySQL" },
    /// { id: 7, name: "React Native" },
    { id: 32, name: "Typescript" },
    { id: 34, name: "Redux" },
    { id: 17, name: "PostgreSQL" },
    { id: 39, name: "SciPy" },
    { id: 42, name: "GCP BigQuery" },
    { id: 57, name: "Docker" },
    { id: 30, name: "web2py" },
    { id: 19, name: "Bootstrap" },
    { id: 59, name: "JavaScript" },
  ])
  const [industryValue, setIndustryValue] = useState([])
  const [serviceValue, setServiceValue] = useState([])
  const [resetInd, setResetInd] = useState(false)
  const [resetTech, setResetTech] = useState(false)
  const [tabValue, setTabValue] = React.useState("one")

  const filteredData = cardData.filter(
    card =>
      (industryValue.length === 0 &&
        serviceValue.length !== 0 &&
        card.cardTechnologies.some(service =>
          serviceValue.includes(service)
        )) ||
      (serviceValue.length === 0 &&
        industryValue.length !== 0 &&
        card.cardIndustry.some(industry => industryValue.includes(industry))) ||
      (card.cardIndustry.some(industry => industryValue.includes(industry)) &&
        card.cardTechnologies.some(service =>
          serviceValue.includes(service)
        )) ||
      (serviceValue.length === 0 && industryValue.length === 0)
  )

  const stateReset = () => {
    setResetInd(false)
    setResetTech(false)
  }
  const handleTabChange = newValue => {
    setTabValue(newValue)
  }

  // const handleChange = newValue => {
  //   setTabValue(newValue)
  // }
  useEffect(() => {
    setIndustryValue([])
    setServiceValue([])
  }, [tabValue])

  return (
    <>
      <Tabs handleChange={handleTabChange} value={tabValue} />

      {tabValue === "one" && (
        <div
          // className="chip-container"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <ClickableChips
            itemsList={industryList}
            handleSelections={setIndustryValue}
            xclass="industry-chip"
            activeClass="industry-chip-active"
          />
        </div>
      )}
      {tabValue === "two" && (
        <div data-aos="fade-up" data-aos-duration="1000">
          <ClickableChips
            itemsList={technologyList}
            handleSelections={setServiceValue}
            tabValue="two"
            xclass="tech-chip"
            activeClass="tech-chip-active"
          />
        </div>
      )}

      {/* <div
        className="portfolio-filters"
        id="projects"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <MultipleSelectFilter
          label="Industries"
          handleSelections={setIndustryValue}
          list={industryList}
          reset={resetInd}
          stateReset={stateReset}
        />

        <MultipleSelectFilter
          label="Technologies"
          handleSelections={setServiceValue}
          list={technologyList}
          reset={resetTech}
          stateReset={stateReset}
        />
      </div> */}

      {tabValue === "one" && (
        <div className="row portfolio-cards-box  pt-2">
          <div
            className={
              industryValue.length === 0 && serviceValue.length === 0
                ? "col-md-6"
                : "col-12"
            }
          >
            <div className="row">
              {!!filteredData &&
                filteredData
                  .filter(
                    item =>
                      item.colSide === "left" ||
                      industryValue.length !== 0 ||
                      serviceValue.length !== 0
                  )
                  .map(item => {
                    return (
                      <PortfolioCard
                        key={item.id}
                        className={
                          industryValue.length === 0 &&
                          serviceValue.length === 0
                            ? !!item.className
                              ? item.className
                              : ""
                            : (!!item.xClass ? item.xClass : "") +
                              "col-xl-3 col-md-4 col-6 card-sm"
                        }
                        bgImg={item.bgImg}
                        cardHeading={item.cardHeading}
                        cardIndustry={item.cardIndustry}
                        cardTechnologies={item.cardTechnologies}
                        cardText={item.cardText}
                        cardBtn={item.cardBtn}
                        clr={item.cardClr}
                        img={item.img}
                        url={item.url}
                      />
                    )
                  })}
            </div>
          </div>
          {industryValue.length === 0 && serviceValue.length === 0 ? (
            <div className="col-md-6">
              <div className="row">
                {!!filteredData &&
                  filteredData
                    .filter(item => item.colSide === "right")
                    .map(item => {
                      return (
                        <PortfolioCard
                          key={item.id}
                          className={!!item.className ? item.className : ""}
                          bgImg={item.bgImg}
                          cardHeading={item.cardHeading}
                          cardIndustry={item.cardIndustry}
                          cardText={item.cardText}
                          cardTechnologies={item.cardTechnologies}
                          cardBtn={item.cardBtn}
                          clr={item.cardClr}
                          img={item.img}
                          url={item.url}
                        />
                      )
                    })}
              </div>
            </div>
          ) : null}
        </div>
      )}
      {tabValue === "two" && (
        <div className="row portfolio-cards-box  pt-2">
          <div
            className={
              industryValue.length === 0 && serviceValue.length === 0
                ? "col-md-6"
                : "col-12"
            }
          >
            <div className="row">
              {!!filteredData &&
                filteredData
                  .filter(
                    item =>
                      item.colSide === "left" ||
                      industryValue.length !== 0 ||
                      serviceValue.length !== 0
                  )
                  .map(item => {
                    return (
                      <PortfolioCard
                        key={item.id}
                        className={
                          industryValue.length === 0 &&
                          serviceValue.length === 0
                            ? !!item.className
                              ? item.className
                              : ""
                            : (!!item.xClass ? item.xClass : "") +
                              "col-xl-3 col-md-4 col-6 card-sm"
                        }
                        bgImg={item.bgImg}
                        cardHeading={item.cardHeading}
                        cardIndustry={item.cardIndustry}
                        cardText={item.cardText}
                        cardBtn={item.cardBtn}
                        clr={item.cardClr}
                        img={item.img}
                        url={item.url}
                        cardTechnologies={item.cardTechnologies}
                      />
                    )
                  })}
            </div>
          </div>
          {industryValue.length === 0 && serviceValue.length === 0 ? (
            <div className="col-md-6">
              <div className="row">
                {!!filteredData &&
                  filteredData
                    .filter(item => item.colSide === "right")
                    .map(item => {
                      return (
                        <PortfolioCard
                          key={item.id}
                          className={!!item.className ? item.className : ""}
                          bgImg={item.bgImg}
                          cardHeading={item.cardHeading}
                          cardIndustry={item.cardIndustry}
                          cardText={item.cardText}
                          cardBtn={item.cardBtn}
                          clr={item.cardClr}
                          img={item.img}
                          url={item.url}
                          cardTechnologies={item.cardTechnologies}
                        />
                      )
                    })}
              </div>
            </div>
          ) : null}
        </div>
      )}

      {filteredData.length < 1 && (
        <div className="py-5">
          <div className="no-data-box">No Data Found!</div>
        </div>
      )}
    </>
  )
}

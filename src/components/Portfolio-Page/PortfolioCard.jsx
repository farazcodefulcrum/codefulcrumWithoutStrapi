import React from "react"
import { Link } from "gatsby"

import "./Portfolio.scss"

export default function PortfolioCard({
  cardHeading,
  cardText,
  bgImg,
  className,
  cardBtn,
  cardIndustry,
  clr,
  img,
  url,
  cardTechnologies,
}) {
  return (
    <div
      className={!!className ? className : ""}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="inner-card" style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="portfolio-img">{img}</div>
        <div className="gradient-effect"></div>
        <div className="card-content">
          <div className="card-heading">{cardHeading}</div>
          <div className="card-text">{cardText}</div>

          <div className="card-tags">
            {!!cardIndustry &&
              cardIndustry.map((item, count) => {
                return (
                  <div key={count} style={{ backgroundColor: `#f8275e` }}>
                    {item}
                  </div>
                )
              })}
            <div className="tags-fade"></div>
          </div>
          <div className="card-tags pt-2">
            {!!cardTechnologies &&
              cardTechnologies.map((item, count) => {
                return (
                  <div key={count} style={{ backgroundColor: "#555bd1" }}>
                    {item}
                  </div>
                )
              })}
            <div className="tags-fade"></div>
          </div>
          <div className="portfolio-card-hover">
            {/* <div className="card-text">{cardText}</div> */}

            <Link to={url ? url : ""}>
              <div className="btn-link">
                <div className="card-btn" style={{ color: `${clr}` }}>
                  {cardBtn}
                </div>
                {url && (
                  <svg
                    className="link-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 7.9999C4 7.86729 4.05268 7.74011 4.14645 7.64635C4.24021 7.55258 4.36739 7.4999 4.5 7.4999H10.293L8.146 5.3539C8.05211 5.26001 7.99937 5.13268 7.99937 4.9999C7.99937 4.86712 8.05211 4.73979 8.146 4.6459C8.23989 4.55201 8.36722 4.49927 8.5 4.49927C8.63278 4.49927 8.76011 4.55201 8.854 4.6459L11.854 7.6459C11.9006 7.69234 11.9375 7.74752 11.9627 7.80827C11.9879 7.86901 12.0009 7.93413 12.0009 7.9999C12.0009 8.06567 11.9879 8.13079 11.9627 8.19153C11.9375 8.25228 11.9006 8.30745 11.854 8.3539L8.854 11.3539C8.76011 11.4478 8.63278 11.5005 8.5 11.5005C8.36722 11.5005 8.23989 11.4478 8.146 11.3539C8.05211 11.26 7.99937 11.1327 7.99937 10.9999C7.99937 10.8671 8.05211 10.7398 8.146 10.6459L10.293 8.4999H4.5C4.36739 8.4999 4.24021 8.44722 4.14645 8.35345C4.05268 8.25968 4 8.13251 4 7.9999Z"
                      fill={clr}
                    />
                  </svg>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

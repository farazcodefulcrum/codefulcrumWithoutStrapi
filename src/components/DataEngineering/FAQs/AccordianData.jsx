import React from "react"
import "./accordian.scss"
function AnswerOne() {
  return (
    <div className="paragraph-wrapper">
      <p>
        To establish a genuinely effective analytics program, companies must
        intentionally invest in developing their data engineering expertise.
        This includes building a solid basis for data management-identifying
        gaps and quality concerns—while improving data collection. Companies
        that actively invest in engineering professionals will get the most out
        of data in the coming years.
      </p>
    </div>
  )
}

function AnswerTwo() {
  return (
    <div className="paragraph-wrapper">
      <p>
        We are surrounded by data. This resource may be used for a variety of
        purposes, including customer service, market research, and, of course,
        sales. Developing sophisticated data systems for businesses is quickly
        becoming necessary. You should hire data engineering consulting experts
        to organize your system and use the data to improve your business
        performance.
      </p>
    </div>
  )
}

function AnswerThree() {
  return (
    <div className="paragraph-wrapper">
      <p>
        Data engineers are responsible for the design, development, and
        maintenance of the data platform, which includes the data
        infrastructure, data processing applications, data storage, and data
        pipelines. In a large company, data engineers are usually divided into
        teams that focus on different parts of the data platform: Data warehouse
        & pipelines, Data infrastructure, Data applications.
      </p>
    </div>
  )
}

function AnswerFour() {
  return (
    <div className="paragraph-wrapper">
      <p>
        The following four areas were highlighted as technological shifts in
        data engineering of the future:
      </p>
      <ul>
        <li>
          Increased connectivity between data sources and the data warehouse
        </li>

        <li>
          {" "}
          Self-service analytics with intelligent tools made possible by data
          engineering
        </li>

        <li> Automation of data science functions </li>

        <li>
          {" "}
          Hybrid data architectures spanning on-premises and cloud environments
        </li>
      </ul>
    </div>
  )
}

export { AnswerOne, AnswerTwo, AnswerThree, AnswerFour }

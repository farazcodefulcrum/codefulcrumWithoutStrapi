import React from "react"
import ContentBoxes from "./ContentBoxes"
import Introduction from "./Introduction"
import DataColumn from "./DataColumn"
import "./AboutProject.scss"

function AboutProject() {
  return (
    <div>
      <Introduction />
      <ContentBoxes />
      <DataColumn />
    </div>
  )
}

export default AboutProject

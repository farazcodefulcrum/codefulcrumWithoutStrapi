import React from "react"
import Header from "./Header"
import "./Workflow.scss"
import { Box } from "@mui/material"
import WorkflowContent from "./WorkflowContent"
import WorkWithUs from "./WorkWithUs/WorkContent"

function workflow() {
  return (
    <div>
      <Header />
      <WorkflowContent />
    </div>
  )
}

export default workflow

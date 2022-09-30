import * as React from "react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Box from "@mui/material/Box"
import "./Portfolio.scss"
export default function ColorTabs({ value, handleChange }) {
  const onChange = (event, newValue) => {
    handleChange(newValue)
  }

  return (
    <div data-aos="fade-up" data-aos-duration="1000" className="select-wrapper">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }} mb={4}>
        <Tabs
          value={value}
          onChange={onChange}
          TabIndicatorProps={{
            style: {
              background: "#f8275e",
              height: "3px",
              textDecoration: "underline",
              borderRadius: "4px",
              transition: ".5s ease-in-out",
            },
          }}
        >
          <Tab value="one" label="Industries" className="tab-mui" />
          <Tab value="two" label="Technologies" className="tab-mui" />
        </Tabs>
      </Box>
    </div>
  )
}

import * as React from "react"
import Chip from "@mui/material/Chip"
import { Box } from "@mui/system"
import "./Portfolio.scss"
export default function ClickableChips({
  itemsList,
  handleSelections,
  xclass,
  activeClass,
}) {
  const [state, setState] = React.useState(null)
  const handleClick = val => {
    setState(val)
    handleSelections([val.name])
  }

  return (
    <Box mb={3}>
      {itemsList.map(item => {
        return (
          <Chip
            label={item.name}
            onClick={() => handleClick(item)}
            className={item.id !== state?.id ? xclass : activeClass}
            key={item.id}
          />
        )
      })}
    </Box>
  )
}

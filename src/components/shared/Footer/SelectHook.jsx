import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import "./Footer.scss"
export default function SelectVariants({
  options,
  label,
  name,
  disabled,
  onChange,
}) {
  const [value, setvalue] = React.useState("")

  const handleChange = event => {
    setvalue(event.target.value)
    onChange(event)
  }

  return (
    <div className="mui-select">
      <FormControl variant="standard" sx={{ minWidth: "100%" }}>
        <InputLabel className={disabled ? "disabled" : "label"}>
          {label}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          name={name}
          sx={{
            ":before": { borderBottom: "2px solid #E6E6E6" },
            ":after": { borderBottom: "2px solid #E6E6E6" },
          }}
          disabled={disabled}
        >
          {options.map((option, index) => {
            return (
              <MenuItem
                value={option.value}
                key={index}
                sx={{ cursor: "none" }}
              >
                {option.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </div>
  )
}

import * as React from "react"
import { styled } from "@mui/material/styles"

import { TextField, Grid } from "@mui/material"
import "./Footer.scss"
import Select from "./Select"
const CssTextField = styled(TextField)({
  "& .MuiInput-input": {},
  "& .MuiInput-input:focus": {},
  "& .MuiFormLabel-root": {
    color: "#2F2F2F",
    fontFamily: "Poppins",
    fontSize: "16px",
    marginBottom: "6px",
  },
  "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
    color: "red",
  },
  "& label.Mui:after": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#B5B5B5",
  },

  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #183266",
  },
  "& .MuiInput-root:before": {
    borderBottom: 0,
    borderBottom: "2px solid #E6E6E6",
  },
})
const CssMessageField = styled(TextField)({
  "& .MuiInput-input": {},
  "& .MuiInput-input:focus": {},
  "& .MuiFormLabel-root": {
    color: "#2F2F2F",
    fontFamily: "Poppins",
    fontSize: "16px",
    marginBottom: "6px",
  },
  "& .MuiFormLabel-asterisk.MuiInputLabel-asterisk": {
    color: "red",
  },
  "& label.Mui:after": {
    color: "#B5B5B5",
  },
  "& label.Mui-focused": {
    color: "#B5B5B5",
  },

  "& .MuiInput-underline:after": {
    borderBottom: "2px solid #183266",
  },
  "& .MuiInput-root:before": {
    borderBottom: 0,
    borderBottom: "2px solid #E6E6E6",
  },
})

export default function CustomizedInputs() {
  return (
    <Grid container columnSpacing={7} rowSpacing={3}>
      <Grid item md={6}>
        <CssTextField
          id="standard-basic"
          label="Name"
          variant="standard"
          fullWidth
          required
        />
      </Grid>
      <Grid item md={6}>
        <CssTextField
          id="standard-basic"
          label="Email"
          variant="standard"
          fullWidth
          type="email"
          required
        />
      </Grid>
      <Grid item md={6}>
        <CssTextField
          id="standard-basic"
          label="Company"
          variant="standard"
          fullWidth
          required
        />
      </Grid>

      <Grid item md={6} className="form-fields">
        <select className="form-select" defaultValue="0" required="required">
          <option value="0" disabled>
            Services
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </Grid>
      {/* <Grid item md={6}>
        <Select />
      </Grid> */}
      <Grid item md={12} className="form-fields">
        <textarea
          name="contact-text"
          id=""
          cols="30"
          rows="5"
          placeholder="Message"
        ></textarea>
      </Grid>
    </Grid>
  )
}

import React, { useState } from "react"
import Button from "../Button"
import { styled } from "@mui/material/styles"
import { TextField, Grid } from "@mui/material"
import "./Footer.scss"
import { navigate } from "gatsby"
import Select from "./SelectHook"
import Loader from "../../utils/Loader"
const CssTextField = styled(TextField)({
  "& .MuiFormLabel-root": {
    color: "#2F2F2F",
    fontFamily: "Abel",
    fontSize: "1.25rem",
    marginBottom: "6px",
    lineHeight: "1rem",
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
  "& .MuiInput-input": {
    cursor: "none",
  },
})

const helpOptions = [
  {
    id: 1,
    name: "Product Strategy",
    value: "Product Strategy",
    budget: false,
  },
  {
    id: 2,
    name: "Product Design",
    value: "Product Design",
    budget: false,
  },
  {
    id: 3,
    name: "Custom Software Development",
    value: "Custom Software Development",
    budget: false,
  },
  {
    id: 4,
    name: "Data Engineering",
    value: "Data Engineering",
    budget: false,
  },
  {
    id: 5,
    name: "Consultation",
    value: "Consultation",
    budget: false,
  },
]
const budgetOptions = [
  {
    id: 1,
    name: "$5000-$10000",
    value: "5000-10000",
  },
  {
    id: 2,
    name: "$10000-$50000",
    value: "5000-10000",
  },
  {
    id: 3,
    name: "$50000+",
    value: "50000",
  },
]
export default function ContactForm() {
  const [open, setOpen] = React.useState(false)

  const [state, setState] = useState({
    name: "",
    email: "",
    company: "",
    help: "",
    budget: "",
    message: "",
  })

  const [budgetDisable, setbudgetDisable] = useState(true)

  const onChangeHandler = e => {
    const value = e.target.value
    if (e.target.name === "help") {
      const value = helpOptions.filter(item => item.name === e.target.value)
      setbudgetDisable(value[0].budget)
    }
    setState({
      ...state,
      [e.target.name]: value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (state.name.length > 25) return
    setOpen(true)
    const form = document.forms["contact"]

    fetch(
      "https://script.google.com/macros/s/AKfycbyVDyCG6u76JONl627-Z6vDPNXB8eFSLjlabDx4gUI4Qf_lSGZL40869BC2r50BiX3BVg/exec",
      { method: "POST", body: new FormData(form) }
    )
      .then(() => {
        navigate("/thank-you")
      })
      .catch(error => console.error("Error!", error.message))
  }
  const errorText = <span style={{ color: "red" }}>Enter a valid name</span>

  return (
    <>
      <Loader open={open} />

      <form name="contact" onSubmit={handleSubmit}>
        <Grid container columnSpacing={5} rowSpacing={6}>
          <Grid item md={6} sm={12} xs={12}>
            <CssTextField
              onChange={onChangeHandler}
              id="standard-basic"
              label="Name"
              variant="standard"
              name="name"
              fullWidth
              required
              helperText={state.name.length > 25 && errorText}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CssTextField
              onChange={onChangeHandler}
              id="standard-basic"
              label="Email"
              variant="standard"
              name="email"
              fullWidth
              type="email"
              required
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <CssTextField
              onChange={onChangeHandler}
              id="standard-basic"
              label="Company"
              variant="standard"
              name="company"
              fullWidth
            />
          </Grid>

          <Grid item md={6} sm={12} xs={12} className="form-fields">
            <Select
              options={helpOptions}
              label="How can we help you?"
              name="help"
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12} className="form-fields">
            <Select
              options={budgetOptions}
              label="Budget"
              name="budget"
              disabled={budgetDisable}
              onChange={onChangeHandler}
            />
          </Grid>
          <Grid item md={12} xs={12} className="form-fields">
            <textarea
              onChange={onChangeHandler}
              name="message"
              id=""
              cols="30"
              rows="4"
              placeholder="Message"
            ></textarea>
          </Grid>
        </Grid>
        <Grid className="text-right  pe-0 pt-5">
          <Button
            text="CANCEL"
            variant="fill"
            border="#2f2f2f"
            bgClr="#ffffff"
            clr="#2f2f2f"
            className="me-3"
          />
          <Button
            text="SEND MESSAGE"
            variant="fill"
            bgClr="#f23b48"
            type="submit"
          />
        </Grid>
      </form>
    </>
  )
}

import React from "react"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"
import Stack from "@mui/material/Stack"
import "./MultipleSelectFilter.scss"

export default function MultipleSelectFilter({
  handleSelections,
  list,
  label,
  reset,
  stateReset,
}) {
  const [value, setValue] = React.useState([])
  const [inputValue, setInputValue] = React.useState("")

  React.useEffect(() => {
    if (handleSelections) {
      const arr = []
      value.map(item => arr.push(item.name))
      handleSelections(arr)
    }
  }, [value])

  React.useEffect(() => {
    if (reset) {
      setInputValue("")
      setValue([])
      stateReset()
    }
  }, [reset])

  return (
    <>
      {/* <button
        onClick={() => {
          setInputValue("")
          setValue([])
        }}
      >
        clear
      </button> */}

      <Stack spacing={3} className="custom-multiple-select">
        <Autocomplete
          ListboxProps={{
            sx: {
              "&& li": {
                cursor: "none",
              },
            },
          }}
          multiple
          id="tags-outlined"
          size="small"
          options={list}
          value={value}
          onChange={(_, value) => {
            setValue(value)
          }}
          inputValue={inputValue}
          onInputChange={(_, value) => {
            setInputValue(value)
          }}
          getOptionLabel={option => option.name}
          filterSelectedOptions={true}
          renderInput={params => <TextField {...params} label={label} />}
        />
      </Stack>
    </>
  )
}

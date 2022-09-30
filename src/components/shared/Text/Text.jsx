import React from "react"

import "./Text.scss"

export default function Text({ variant, align, children, className }) {
  return (
    <div className={align === "center" ? " text-center" : ""}>
      <div
        className={
          className +
          " text" +
          (variant === "26"
            ? " size-26"
            : variant === "22"
            ? " size-22"
            : variant === "20"
            ? " size-20"
            : variant === "18"
            ? " size-18"
            : null)
        }
      >
        {children}
      </div>
    </div>
  )
}

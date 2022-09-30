import React, { useState } from "react"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import "./AboutUsSection.scss"
const Ticker = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false)

  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={isVisible => {
              if (isVisible) {
                setViewPortEntered(true)
              }
            }}
            delayedCall
            scrollCheck
            intervalDelay={10}
          >
            <h4 className="animated-digit" ref={countUpRef} />
          </VisibilitySensor>
        )
      }}
    </CountUp>
  )
}

export default Ticker

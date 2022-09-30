import React, { useRef } from "react"
import Lottie from "react-lottie"
import animationData from "./Line.json"
import VisibilitySensor from "react-visibility-sensor"

function LottieArrow() {
  const [viewPortEntered, setViewPortEntered] = React.useState(false)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  }
  const ref = useRef(null)
  console.log(viewPortEntered)
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
      <Lottie options={defaultOptions} />
    </VisibilitySensor>
  )
}

export default LottieArrow

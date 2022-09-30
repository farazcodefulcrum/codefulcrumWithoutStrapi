import Typewriter from "typewriter-effect"
import "./CharacterReveal.scss"
import React from "react"
function CharacterReveal() {
  return (
    <div className="Typewriter__wrapper">
      <Typewriter
        options={{
          strings: ["Strategize", "Design", "Develop", "Deliver"],
          autoStart: true,
          loop: true,
          delay: 50,
          deleteSpeed: 30,
        }}
      />
    </div>
  )
}

export default CharacterReveal

import React from "react"
import Hero from "./Hero"
import Footer from "../shared/Footer/Footer"
import Head from "../utils/Head"

function Thankyou() {
  return (
    <div>
      <Head title="Thank You" />

      <Hero
        btnText="CHECK OUT OUR PORTFOLIO"
        img="/thanku-bg.png"
        header="Thank you for reaching out to us!"
        text="One of our consultants will be getting in touch with you shortly to discuss your needs and necessities, to understand how we can be helpful for your project and what is required from your side to move forward and define the next steps for future cooperation."
      />
    </div>
  )
}

export default Thankyou

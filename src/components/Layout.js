import React, { useEffect } from "react"
import Navbar from "./shared/NavBarTop/NavBarTop"
import Footer from "./shared/Footer/Footer"

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout

import React, { useState, useEffect } from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, navigate } from "gatsby"
import { useLocation } from "@reach/router"
import "./NavBarTop.scss"
import Button from "../Button/Button"
import DropDown from "./DropDown"
export default function NavBarTop() {
  const [isShrunk, setShrunk] = useState(false)
  const [isShown, setIsShown] = useState(false)
  const [expand, setExpand] = useState(false)
  const [caseStudy, setcaseStudy] = useState(false)
  const [width, setWidth] = useState(null)
  const useLoc = useLocation()

  useEffect(() => {
    setIsShown(false)
    width < 992 && setExpand(false)
    if (
      useLoc.pathname == "/casestudy/track-hero" ||
      useLoc.pathname == "/casestudy/track-hero/"
    ) {
      setcaseStudy(true)
    } else if (
      useLoc.pathname == "/casestudy/ohm-connect" ||
      useLoc.pathname == "/casestudy/ohm-connect/"
    ) {
      setcaseStudy(true)
    } else {
      setcaseStudy(false)
    }
  }, [useLoc.pathname])
  useEffect(() => {
    const handler = () => {
      setShrunk(isShrunk => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20)
        ) {
          return true
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false
        }

        return isShrunk
      })
    }
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const updateDimensions = () => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }
  useEffect(() => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }, [])
  useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateDimensions)
      return () => window.removeEventListener("resize", updateDimensions)
    }
  }, [width])

  const ServicesClickHandler = () => {
    width > 992 && navigate("/services")
  }
  return (
    <div>
      <Navbar
        expand="lg"
        fixed="top"
        className={!!isShrunk ? "shrink-nav" : ""}
        expanded={expand}
      >
        <Container className="px-3" style={{ position: "relative" }}>
          {isShown && (
            <div className="">
              <DropDown
                onMouseLeave={() => setIsShown(false)}
                onTouchEnd={() => setIsShown(false)}
              />
            </div>
          )}

          <Link to="/" className="navbar-brand">
            <img
              src={
                caseStudy && !isShrunk && width > 992
                  ? `/CF-logo.svg`
                  : `/CF-logo-dark.svg`
              }
              alt="logo"
              className="img-fluid"
            />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            onClick={() => {
              setExpand(!expand)
              setIsShown(false)
            }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="mx-auto" navbarScroll>
              <div>
                <NavDropdown
                  onMouseEnter={() => setIsShown(true)}
                  onTouchStart={() => setIsShown(!isShown)}
                  onClick={ServicesClickHandler}
                  title="Services"
                  id={
                    caseStudy && !isShrunk && width > 992
                      ? `navbarScrollingDropdown`
                      : "false"
                  }
                  ///Received `false` for a non-boolean attribute `id`
                  ///id is non boolean so we cant pass false but we pass string "false"
                ></NavDropdown>
              </div>
              <Link
                to="/portfolio"
                className={
                  caseStudy && !isShrunk && width > 992
                    ? `nav-link case-study`
                    : `nav-link`
                }
                onClick={() => setExpand(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/about-us"
                onClick={() => setExpand(false)}
                className={
                  caseStudy && !isShrunk && width > 992
                    ? `nav-link case-study`
                    : `nav-link`
                }
              >
                About Us
              </Link>
              <a
                href="https://codefulcrum.zohorecruit.com/jobs/Careers"
                className={
                  caseStudy && !isShrunk && width > 992
                    ? `nav-link case-study`
                    : `nav-link`
                }
                target="_blank"
                onClick={() => setExpand(false)}
              >
                Careers
              </a>
            </Nav>
            <div className="text-center">
              <Button
                href="/contact"
                text="CONTACT US"
                bgClr={
                  caseStudy && !isShrunk && width > 992 ? `#ffffff` : `#121212`
                }
                border={
                  caseStudy && !isShrunk && width > 992 ? `#ffffff` : `#121212`
                }
                clr={
                  caseStudy && !isShrunk && width > 992 ? `#2f2f2f` : `#ffffff`
                }
                variant="fill"
                className="nav-btn"
                onClick={() => setExpand(false)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

import React from "react"
import { Link } from "gatsby"

import "../Hero/Hero.scss"
import "./Footer.scss"

export default function Footer() {
  const footerCopyRight = [
    { id: 1, text: "codeFulcrum, LLC © 2022 All Rights Reserved.", link: "/" },
    { id: 2, text: "Privacy Policy", link: "/privacy-policy" },
    { id: 3, text: "Terms Of Use", link: "/terms-of-use" },
  ]
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer-inner-box">
            <div className="row">
              <div className="col-lg-3 col-sm-4  col-12">
                <Link to="/">
                  <div className="footer-logo">
                    <img
                      src="/homepage/CF-logo-dark.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <div className="social-icons mb-5">
                  <a
                    href="https://www.linkedin.com/company/codefulcrum/"
                    target="_blank"
                    className="social-icon"
                    rel="noreferrer"
                  >
                    <img
                      src="/homepage/linkedin.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>

                  <a
                    href="https://instagram.com/codefulcrum_?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    className="social-icon"
                    rel="noreferrer"
                  >
                    <img
                      src="/homepage/instagram.svg"
                      alt=""
                      className="img-fluid"
                      id="insta"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/codeFulcrum/"
                    target="_blank"
                    className="social-icon"
                    rel="noreferrer"
                  >
                    <img
                      src="/homepage/facebook.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 col-sm-4 col-4 mb-3">
                <div className="menu-heading">About</div>
                <Link to="/about-us" style={{ textDecoration: "none" }}>
                  <div className="menu-items">About Us</div>
                </Link>
                <Link to="/portfolio" style={{ textDecoration: "none" }}>
                  <div className="menu-items">Portfolio</div>
                </Link>

                <a
                  href="https://codefulcrum.zohorecruit.com/jobs/Careers"
                  style={{ textDecoration: "none" }}
                  target="_blank"
                >
                  <div className="menu-items">Careers</div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-4 col-8 mb-3">
                <Link to="/services" style={{ textDecoration: "none" }}>
                  <div className="menu-heading">All Services</div>
                </Link>
                <Link to="/product-strategy" style={{ textDecoration: "none" }}>
                  <div className="menu-items">Product Strategy</div>
                </Link>
                <Link to="/product-design" style={{ textDecoration: "none" }}>
                  <div className="menu-items">Product Design</div>
                </Link>
                <Link
                  to="/custom-software-development"
                  style={{ textDecoration: "none" }}
                >
                  <div className="menu-items">Custom Software Development</div>
                </Link>
                <Link to="/data-engineering" style={{ textDecoration: "none" }}>
                  <div className="menu-items">Data Engineering</div>
                </Link>
              </div>
              <div className="col-lg-3 col-10">
                <div className="usa-address">
                  <div className="location">
                    <img src="/homepage/Location.svg" alt="" /> 112 Capitol
                    Trail Suite A192, Newark, Delaware
                  </div>
                  <div className="phone">
                    <img src="/homepage/Call.svg" alt="" /> (628) 215-3611
                  </div>
                </div>
                <div className="address">
                  <div className="location">
                    <img src="/homepage/Location.svg" alt="" /> 327 Block A,
                    Canal View, Lahore
                  </div>
                  <div className="phone">
                    <img src="/Call.svg" alt="" /> (042) 3229-2295
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              {!!footerCopyRight &&
                footerCopyRight.map(item => {
                  return (
                    <Link
                      key={item.id}
                      to={item.link}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="footer-copyright-item">{item.text}</div>
                    </Link>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

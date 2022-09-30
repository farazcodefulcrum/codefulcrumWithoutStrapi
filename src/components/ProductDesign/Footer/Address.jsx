import React from "react"

import Heading from '"../../shared/Heading"'
import Text from '"../../shared/Text"'
import PhoneIcon from "assets/images/phone.svg"
import MailIcon from "assets/images/mail.svg"
import MapImg from "assets/images/map-img.png"

export default function Address() {
  return (
    <div className="col-sm-6 col-12 ps-sm-5 ps-0 mt-sm-0 mt-5">
      <div
        data-aos="fade-up-left"
        data-aos-duration="300"
        data-aos-offset="600"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
      >
        <div className="address-box ps-sm-5 ps-4">
          <Heading variant="26">USA Office</Heading>
          <Text variant="20" className="pb-3">
            112 Capitol Trail Suite A, Newark, Delaware
          </Text>
          <div className="d-flex align-items-center pb-3">
            <div className="address-icon">
              <img src={PhoneIcon} alt="" className="img-fluid" />
            </div>
            <Text variant="20" className="ps-3 pb-0">
              (628) 215-3611
            </Text>
          </div>
          <div className="d-flex align-items-center">
            <div className="address-icon">
              <img src={MailIcon} alt="" />
            </div>
            <Text variant="20" className="ps-3 pb-0">
              contact@codefulcrum.com
            </Text>
          </div>
        </div>
        <div className="address-map-img">
          <img src={MapImg} alt="" className="img-fluid" />
        </div>
      </div>
    </div>
  )
}

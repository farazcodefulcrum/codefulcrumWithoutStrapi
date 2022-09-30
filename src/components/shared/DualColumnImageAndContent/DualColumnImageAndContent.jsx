import React from "react"

import Text from "../Text"
import Heading from "../Heading"
import ImageWithText from "../ImageWithText"
import Button from "../Button"

export default function DualColumnImageAndContent({
  img,
  heading,
  text,
  data,
  type,
  href,
  col,
}) {
  return (
    <>
      <div className="bg-cf-dark py-5">
        <div className="container">
          <div className="row g-4 py-2">
            {type === "left" ? (
              <div className="col-lg-5 pe-5">
                <div className="services-side-img lg-display-none">
                  <img src={img} alt="" className="img-fluid" />
                </div>
              </div>
            ) : null}
            <div className="col-lg-7 pe-5">
              <Heading variant="28">{heading}</Heading>
              <Text variant="22">{text}</Text>
              <div className="row g-3">
                {!!data &&
                  data.map(item => {
                    return (
                      <div
                        className={col === "1" ? "col-12" : "col-lg-6"}
                        key={item.id}
                      >
                        <ImageWithText
                          img={item.img}
                          heading={item.heading}
                          text={item.text}
                        />
                      </div>
                    )
                  })}
              </div>
              <Button text="LEARN MORE" href={href} className="mt-4" />
            </div>
            {type === "right" ? (
              <div className="col-lg-5 pe-5">
                <div className="services-side-img lg-display-none">
                  <img src={img} alt="" className="img-fluid" />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  )
}

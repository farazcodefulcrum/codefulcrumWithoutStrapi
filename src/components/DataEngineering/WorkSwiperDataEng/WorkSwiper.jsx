import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, Keyboard, Navigation, Autoplay } from "swiper"
import { images } from "../../../../static"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./WorkSwiper.scss"
import Heading from "../../shared/Heading"

export default function WorkSwiper() {
  const clientWorkData = [
    {
      id: 1,
      cardHeading: ["Data Preparation", " and ETL"],

      cardText:
        "Data preparation, processing, and ETL aid in the transformation and loading of data into the required data model for business reporting and advanced analytics. Our Data Engineering team has created such pipelines for a variety of industries.",
    },
    {
      id: 2,
      cardHeading: ["Data Lake", "Implementation"],

      cardText:
        "Data Lakes are the most powerful and innovative solution for cost-effective data storage and fast processing. Adoption of Data Lakes in your organization can help you expand your corporate data architecture. Data Lake solutions have been used by codeFulcrum to handle a number of client business difficulties, including product traceability, customer data platforms, IoT data reporting, and others.",
    },
    {
      id: 3,
      cardHeading: ["Modern Data", "Pipelines"],

      cardText:
        "Designing, building, and executing high-quality end-to-end automated data pipelines.  The data engineering team at codeFulcrum has extensive expertise implementing automated data pipelines in the cloud.",
    },
    {
      id: 4,
      cardHeading: ["Cloud Data", "Architecture"],

      cardText:
        "Building and designing adaptable and highly accessible company data architectures is critical today. By combining experience working with several SMEs and Enterprises, our Data Architects can help your company go to the next level in terms of data analytics foundation.",
    },
  ]

  const [width, setWidth] = useState(null)

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
  return (
    <>
      <div className="work-swiper-data-eng">
        <div className="row">
          {/* <div className="col-md-5 d-flex align-items-center justify-content-center">
            <div className="position-relative work-sec-heading-w">
              <Heading variant="64" className="pb-2 mb-5">
                Our Featured Work
              </Heading>
              <div className="our-work-stroke">
                <img src="/our-work-stroke.png" alt="" />
              </div>
            </div>
          </div> */}
          <div
            className="col-md-12 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* <div className="d-flex justify-content-end">
              <Link to="/" className="all-projects">
                View All Projects{" "}
                <img src="/our-work-link-arrow.svg" alt="" className="ms-2" />
              </Link>
            </div> */}
            <Swiper
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              slidesPerView={"auto"}
              navigation={width > 500 ? true : true}
              centeredSlides={true}
              spaceBetween={1000}
              pagination={{
                clickable: true,
              }}
              mousewheel={{ forceToAxis: true }}
              loop={true}
              keyboard={true}
              grabCursor={true}
              modules={[Pagination, Mousewheel, Keyboard, Autoplay, Navigation]}
              className="mySwiper"
            >
              {!!clientWorkData &&
                clientWorkData.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div className="client-work-slide">
                        <div className="inner-div">
                          <div>
                            {item.cardHeading.map((item, i) => {
                              return (
                                <Heading
                                  variant="32"
                                  className="pb-0 header"
                                  key={i}
                                >
                                  {item}
                                </Heading>
                              )
                            })}
                          </div>
                          <div className="text">{item.cardText}</div>
                          {/* {item.cardText.map(item => {
                            return <div className="text">{item}</div>
                          })} */}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  )
}

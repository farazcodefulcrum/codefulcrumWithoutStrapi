import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, Keyboard, Navigation, Autoplay } from "swiper"
import { images } from "../../../../static"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./WorkSwiper.scss"
import { useState } from "react"
import Heading from "../../shared/Heading"
import { StaticImage } from "gatsby-plugin-image"

export default function WorkSwiper() {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const clientWorkData = [
    {
      id: 1,
      bgClr: "#a23fee",
      img: "../../../../static/productStrategy/swiper/trackhero.png",
    },

    {
      id: 2,
      bgClr: "#FFA800",
      img: "../../../../static/productStrategy/swiper/driverbee.png",
    },
    {
      id: 3,
      bgClr: "#18BD93",
      img: "../../../../static/productStrategy/swiper/strada.png",
    },
  ]
  return (
    <div
      className="img-swiper"
      id="design-pics"
      style={{
        background: selectedSlide.bgClr,
      }}
    >
      <div
        className="container"
        // data-aos="fade-up"
        // data-aos-anchor-placement="top-center"
        // data-aos-duration="1000"
      >
        <Swiper
          onSlideChange={data => {
            setSelectedSlide(clientWorkData[data.realIndex])
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          //navigation={true}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          loop={true}
          spaceBetween={100}
        >
          {!!clientWorkData &&
            clientWorkData.map((item, i) => {
              return (
                <SwiperSlide key={item.id}>
                  <div className="img-wrapper">
                    {i === 1 && (
                      <StaticImage
                        src="../../../../static/productStrategy/swiper/driverbee.png"
                        placeholder="none"
                        formats={["auto", "webp", "avif"]}
                        alt="img"
                      />
                    )}
                    {i === 2 && (
                      <StaticImage
                        src="../../../../static/productStrategy/swiper/strada.png"
                        placeholder="none"
                        formats={["auto", "webp", "avif"]}
                        alt="img"
                      />
                    )}
                    {i === 0 && (
                      <StaticImage
                        src="../../../../static/productStrategy/swiper/trackhero.png"
                        placeholder="none"
                        formats={["auto", "webp", "avif"]}
                        alt="img"
                      />
                    )}
                  </div>
                </SwiperSlide>
              )
            })}
        </Swiper>
      </div>
    </div>
  )
}

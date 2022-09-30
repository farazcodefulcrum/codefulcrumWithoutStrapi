import React from "react"
import { Link } from "gatsby"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel, Keyboard, Navigation, Autoplay } from "swiper"
import { images } from "../../../../static"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "./WorkSwiper.scss"
import Heading from "../../shared/Heading"
import {
  Trackhero,
  Coworkify,
  Driverbee,
  Energy,
  Comet,
  Healthtech,
  Klixpert,
  Martech,
  Pixeleto,
  Rating,
  Strada,
  Ugami,
  Vector,
  Ohmconnect,
  Aimexpert,
} from "./SVGs"

export default function WorkSwiper() {
  const clientWorkData = [
    {
      id: 1,
      cardHeading: "OhmConnect",
      img: <Ohmconnect />,
      cardText: "Energy Saving Platform",
    },
    {
      id: 2,
      bgImg: images.portfolio.PortfolioAimBg,
      img: <Aimexpert />,
      cardHeading: "AIM Experts ",
      cardText: "Automotive Inventory Management Platform",
    },
    {
      id: 3,
      bgImg: images.portfolio.PortfolioPixeletoBg,
      img: <Pixeleto />,
      cardHeading: "Pixeleto",
      cardText: "Graphics Marketplace",
    },
    {
      id: 4,
      bgImg: images.portfolio.PortfolioStradaBg,
      img: <Strada />,
      cardHeading: "Strada",
      cardText: "Commercial Property Management",
    },
    {
      id: 5,
      bgImg: images.portfolio.PortfoilioPredictBg,
      img: <Vector />,
      cardHeading: "PredictAlly™",
      cardText: "Predictive Marketing Cloud.",
    },
    {
      id: 6,
      bgImg: images.portfolio.PortfolioTrackheroBg,
      img: <Trackhero />,
      cardHeading: "TrackHero",
      cardText: "Experiential Events & Fleet Management Platform",
    },
    {
      id: 7,
      bgImg: images.portfolio.PortfolioIbdBg,
      img: <Martech />,
      cardHeading: "IBD Sports",
      cardText:
        "Productivity Solution and Workflow for High-Volume Photography",
    },
    {
      id: 8,
      bgImg: images.portfolio.PortfolioRatingBg,
      img: <Rating />,
      cardHeading: "RatingTheRaces",
      cardText: "Rating & Betting Platform",
    },
    {
      id: 9,
      bgImg: images.portfolio.PortfolioCommetBg,
      img: <Comet />,
      cardHeading: "Energy Action Partners",
      cardText: "Community Energy Toolkit (COMET)",
    },
    {
      id: 10,
      bgImg: images.portfolio.PortfolioKillBg,
      img: <Klixpert />,
      cardHeading: "KLIXpert",
      cardText: "Digital Marketing Agency",
    },
    {
      id: 11,
      bgImg: images.portfolio.PortfolioUgamiBg,
      img: <Ugami />,
      cardHeading: "Ugami",
      cardText: "Financial Solution for Gamers",
    },
    {
      id: 12,
      bgImg: images.portfolio.PortfolioCowokifyBg,
      img: <Coworkify />,
      cardHeading: "Coworkify",
      cardText: "Coworking Space Management Platform",
    },
    {
      id: 13,
      bgImg: images.portfolio.PortfolioDriverBg,
      img: <Driverbee />,
      cardHeading: "DriverBee",
      cardText: "Shipment Management",
    },

    {
      id: 14,
      bgImg: images.portfolio.PortfolioAccretioBg,
      img: <Healthtech />,
      cardHeading: "Hero Trainer",
      cardText: "Personal Reward System",
    },
  ]
  const [width, setWidth] = React.useState(null)

  const updateDimensions = () => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }
  React.useEffect(() => {
    if (window !== "undefined") {
      setWidth(window.innerWidth)
    }
  }, [])
  React.useEffect(() => {
    if (window !== "undefined") {
      window.addEventListener("resize", updateDimensions)
      return () => window.removeEventListener("resize", updateDimensions)
    }
  }, [width])
  return (
    <>
      <div className="work-swiper-case-study">
        <div className="row">
          <div className=" col-md-12 col-lg-12">
            <Swiper
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              loop={true}
              slidesPerView={"auto"}
              centeredSlides={true}
              spaceBetween={width > 500 ? 60 : 40}
              pagination={{
                clickable: true,
              }}
              mousewheel={{ forceToAxis: true }}
              keyboard={true}
              grabCursor={true}
              modules={[Pagination, Mousewheel, Autoplay, Keyboard, Navigation]}
              className="mySwiper"
            >
              {!!clientWorkData &&
                clientWorkData.map(item => {
                  return (
                    <SwiperSlide key={item.id}>
                      <div
                        className="client-work-slide"
                        // data-aos="zoom-in"
                        // data-aos-duration="1000"
                      >
                        <div className="client-work-image">{item.img}</div>
                        <div className="pt-3 header">
                          <div>
                            <Heading variant="32" className="pb-0">
                              {item.cardHeading}
                            </Heading>
                            <div className="text">{item.cardText}</div>
                          </div>
                          {/* <div className="link">View Case Study</div> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                })}
            </Swiper>
            <div className="d-flex justify-content-end">
              <Link to="/portfolio" className="all-projects">
                View All Projects{" "}
                <img src="/our-work-link-arrow.svg" alt="" className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

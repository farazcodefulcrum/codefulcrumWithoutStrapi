import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { images } from "../../../static/index";
import { Box } from "@mui/system";
import PortfolioCards from "./PortfolioCards";
import Hero from "./Hero";
import { StaticImage } from "gatsby-plugin-image";

import ContactUs from "../shared/Footer/ContactUs";
import {
  Trackhero,
  Coworkify,
  Driverbee,
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
} from "../Homepage/WorkSwiper/SVGs";
import "./Portfolio.scss";
import Head from "../utils/Head";

function Portfolio() {
  const cardData = [
    {
      id: 1,
      bgImg: images.portfolio.PortfolioOhmBg,
      img: <Ohmconnect />,
      cardHeading: "OhmConnect",
      cardIndustry: [
        "GreenTech",
        "Energy & Utilities",
        "Natural Resources",
        "Energy",
      ],
      cardTechnologies: [
        "Python",
        "Flask",
        "ReactJS",
        "Typescript",
        "Webflow",
        "MySQL",
        "Redux",
        "AWS",
      ],
      cardText: "Energy Saving Platform",
      cardBtn: "Read More",
      cardClr: "#546af2",
      className: "col-md-12 col-6 card-sm",
      xClass: "",
      colSide: "left",
      url: "/casestudy/ohm-connect",
    },
    {
      id: 2,
      bgImg: images.portfolio.PortfolioAimBg,
      img: <Aimexpert />,
      cardHeading: "AIM Experts ",
      cardIndustry: ["Automotive", "B2B", "Car Dealership Platform"],
      cardTechnologies: [
        "Python",
        "TensorFlow",
        "OpenCV",
        "Django",
        "MySQL",
        "AWS",
        "Jupyter Notebook",
      ],
      cardText: "Automotive Inventory Management Platform",
      cardBtn: "Coming soon!",
      cardClr: "#f40001",
      className: "col-md-12 col-6 card-sm",
      xClass: "object-left",
      colSide: "left",
    },
    {
      id: 6,
      bgImg: images.portfolio.PortfolioTrackheroBg,
      img: <Trackhero />,
      cardHeading: "TrackHero",
      cardIndustry: [
        "Automotive",
        "Experiential Events",
        "Fleet Management",
        "B2B SaaS",
      ],
      cardTechnologies: [
        "Django",
        "PostgreSQL",
        "ReactJs",
        "Typescript",
        "WebSockets",
        "Redux",
        "AWS",
      ],
      cardText: "Experiential Events & Fleet Management Platform",
      cardBtn: "Read More",
      cardClr: "#601cff",

      url: "/casestudy/track-hero",
      className: "col-md-12 col-6 card-sm",
      xClass: "object-right",
      colSide: "right",
    },

    {
      id: 5,
      bgImg: images.portfolio.PortfoilioPredictBg,
      img: <Vector />,
      cardHeading: "PredictAlly™ by VectorScient",
      cardIndustry: ["Artificial Intelligence", "Machine Learning", "MarTech"],
      cardTechnologies: [
        "Python",
        "scikit-learn",
        "SciPy",
        "GCP BigQuery",
        "NumPy",
        "Pandas",
      ],
      cardText: "Predictive Marketing Cloud.",
      cardBtn: "Coming soon!",
      cardClr: "#FECD74",
      className: "col-md-12 col-6 card-sm",
      xClass: "",
      colSide: "right",
    },
    {
      id: 3,
      bgImg: images.portfolio.PortfolioPixeletoBg,
      img: <Pixeleto />,
      cardHeading: "Pixeleto",
      cardIndustry: [
        "MarTech",
        "AdTech",
        "Advertising & Marketing",
        "Design Agency",
        "Social Media",
      ],
      cardTechnologies: [
        "Python",
        "AWS Data Lake",
        "AWS Glue",
        "AWS Spark",
        "AWS RedShift",
      ],
      cardText: "Graphics Marketplace",
      cardBtn: "Coming soon!",
      cardClr: "#3C3A50",
      className: "col-md-12 col-6 card-sm",
      xClass: "",
      colSide: "left",
    },
    {
      id: 4,
      bgImg: images.portfolio.PortfolioStradaBg,
      img: <Strada />,
      cardHeading: "Strada",
      cardIndustry: [
        "RealTech",
        "RealEstate",
        "Commercial Property Management",
      ],
      cardTechnologies: [
        "Python",
        "Django",
        "ReactJS",
        "PostgreSQL",
        "AWS",
        "Yardi API",
      ],
      cardText: "Commercial Property Management",
      cardBtn: "Coming soon!",
      cardClr: "#00cfa1",
      className: "col-md-12 col-6 card-lg",
      xClass: "object-left",
      colSide: "right",
    },

    {
      id: 12,
      bgImg: images.portfolio.PortfolioDriverBg,
      img: <Driverbee />,
      cardHeading: "DriverBee",
      cardIndustry: ["Transportation & Logistics"],
      cardTechnologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "ReactJS",
        "Bootstrap",
        "AWS",
      ],
      cardText: "Shipment Management",
      cardBtn: "Coming soon!",
      cardClr: "#FFB800",
      className: "col-md-12 col-6 card-sm",
      xClass: "object-right",
      colSide: "right",
    },
    {
      id: 13,
      bgImg: images.portfolio.PortfolioUgamiBg,
      img: <Ugami />,
      cardHeading: "Ugami",
      cardIndustry: ["FinTech", "GameTech", "Gaming"],
      cardTechnologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "Circle API",
        "Unit API",
        "AWS",
      ],
      cardText: "Financial Solution for Gamers",
      cardBtn: "Coming soon!",
      cardClr: "#FF364E",
      className: "col-12 card-lg object-size",
      xClass: "object-size",
      colSide: "left",
    },

    {
      id: 9,
      bgImg: images.portfolio.PortfolioCommetBg,
      img: <Comet />,
      cardHeading: "Energy Action Partners",
      cardIndustry: [
        "GreenTech",
        "Energy",
        "Natural Resources",
        "Energy Conservation",
      ],
      cardTechnologies: [
        "Django",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Redux",
      ],
      cardText: "Community Energy Toolkit (COMET)",
      cardBtn: "Coming soon!",
      cardClr: "#f65c0d",
      className: "col-md-12 col-6 card-lg",
      xClass: "object-right",
      colSide: "right",
    },
    {
      id: 7,
      bgImg: images.portfolio.PortfolioIbdBg,
      img: <Martech />,
      cardHeading: "IBD Sports",
      cardIndustry: ["Advertising and Marketing", "Photography", "Creative"],
      cardTechnologies: [
        "Django",
        "JavaScript",
        "Adobe Creative Cloud",
        "Stripe API",
        "AWS",
        "Bootstrap",
      ],
      cardText:
        "Productivity Solution and Workflow for High-Volume Photography",
      cardBtn: "Coming soon!",
      cardClr: "#FFA600",
      className: "col-md-12 col-6 card-sm",
      xClass: "object-right",
      colSide: "left",
    },
    {
      id: 8,
      bgImg: images.portfolio.PortfolioRatingBg,
      img: <Rating />,
      cardHeading: "RatingTheRaces",
      cardIndustry: ["Financial Services", "Betting"],
      cardTechnologies: [
        "Django",
        "ReactJS",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Typescript",
        "Docker",
      ],
      cardText: "Rating & Betting Platform",
      cardBtn: "Coming soon!",
      cardClr: "#10661A",
      className: "col-md-12 col-6 card-sm",
      xClass: "",
      colSide: "right",
    },
    {
      id: 14,
      bgImg: images.portfolio.PortfolioAccretioBg,
      img: <Healthtech />,
      cardHeading: "HeroTrainer",
      cardIndustry: ["HealthCare", "Health", "Fitness"],
      cardTechnologies: [
        "Python",
        "Django",
        "web2py",
        "Bootstrap",
        "PostgreSQL",
        "AWS",
      ],
      cardText: "Fitness Rewards System",
      cardBtn: "Coming soon!",
      cardClr: "#632AB5",
      className: "col-12 card-sm",
      xClass: "",
      colSide: "right",
    },

    {
      id: 10,
      bgImg: images.portfolio.PortfolioKillBg,
      img: <Klixpert />,
      cardHeading: "KLIXpert",
      cardIndustry: ["HealthCare", "FitnessTech"],
      cardTechnologies: ["Python", "Django", "PostgreSQL", "ReactJS", "Skote"],
      cardText: "Personal Reward System",
      cardBtn: "Coming soon!",
      cardClr: "#D4C10A",
      className: "col-md-12 col-6 card-lg",

      xClass: "",
      colSide: "left",
    },
    {
      id: 11,
      bgImg: images.portfolio.PortfolioCowokifyBg,
      img: <Coworkify />,
      cardHeading: "Coworkify",
      cardIndustry: ["RealEstate", "Commercial Real Estate", "Coworking"],
      cardTechnologies: [
        "BackboneJS",
        "Pyramid/Python",
        "MySQL",
        "Bootstrap",
        "Paypal API",
      ],
      cardText: "Coworking Space Management Platform",
      cardBtn: "Coming soon!",
      cardClr: "#E53E61",
      className: "col-md-12 col-6 card-sm",
      xClass: "object-left",
      colSide: "left",
    },
  ];

  // const data = useStaticQuery(graphql`
  //   query {

  //   }
  // `);
  // console.log(
  //   data.allStrapiHomes.nodes[0].test[0].adf[0].localFile.childImageSharp.fluid
  // );
  // const url =
  //   data.allStrapiServicesHome.nodes[0].cardData[0].img[0].localFile.publicURL;
  return (
    <div className="porfolio-bg">
      <Head title="Portfolio" />
      <Hero
        id="top"
        btnText="TALK TO US"
        img={images.portfolio.PortfolioHero}
        text="Take a look below at some of the great products that we’ve helped our partners build."
      >
        These Companies Trusted Us And So Can You.
      </Hero>

      {/* <img
        src={data.allStrapiHomes.nodes[0].g.localFile.childImageSharp.fluid.src}
        // src={
        //   data.allStrapiHomes.nodes[0].test[0].adf[0].localFile.childImageSharp
        //     .fluid.src
        // }
        className="img-fluid"
      /> */}
      {/* <StaticImage
        src={url}
        placeholder="none"
        formats={["auto", "webp", "avif"]}
        alt="img"
      /> */}
      <div className="portfolio-main-wrapper">
        <div className="container">
          <PortfolioCards cardData={cardData} />
        </div>
      </div>
      <Box mt={-7.48}>
        <ContactUs />
      </Box>
    </div>
  );
}
export default Portfolio;

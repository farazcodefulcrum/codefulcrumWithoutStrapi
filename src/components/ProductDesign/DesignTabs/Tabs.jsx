import React from "react"
import "./Tabs.scss"
function Tabs() {
  const [state, setState] = React.useState({
    id: 1,
    name: "Discover",
    header: "Understanding your business goals and challenges",
    detail:
      "First, we identify the scope of your project and take the time to understand your product idea and business needs and how the problem statement should abide by the functions of your product, specifically what it does or should do. This includes discussing potential features, technological solutions, and the time required to deliver them. As a result, we can provide you with a general development quotation and timeframe.",
  })
  const tabs = [
    {
      id: 1,
      name: "Discover",
      header: "Understanding your business goals and challenges",
      detail:
        "First, we identify the scope of your project and take the time to understand your product idea and business needs and how the problem statement should abide by the functions of your product, specifically what it does or should do. This includes discussing potential features, technological solutions, and the time required to deliver them. As a result, we can provide you with a general development quotation and timeframe.",
    },
    {
      id: 2,
      name: "Research",
      header: "Market insights & competitive analysis",
      detail:
        "A quality product requires a well-defined vision as well as a customer and market-driven strategy. This is why we delve into the specifics of your industry, analyze your competitors' moves, and learn about the latest trends and the needs of your users. Our product design services can assist you in identifying new opportunities for your company and developing a dependable Unique Value Proposition for your product.",
    },
    {
      id: 3,
      name: "Ideate",
      header: "Storyboarding and wireframing",
      detail:
        "This is the most crucial step in the design process that demands innovative thinking. During the customer-tailored design sprints, we take our time developing use cases by defining individual requirements. A use case depicts how a user takes specific steps to achieve a specific goal. Use cases function more like a software modeling technique, allowing us to define the features we want to implement. It also resolves any errors that may arise early in the development process. Before implementing anything, we take the time to create a storyboard for each use case and present it to you.We then brainstorm viable solutions, and wireframe all critical features",
    },
    {
      id: 4,
      name: "Prototype",
      header: "Completing the MVP and further iteration",
      detail:
        "A clickable prototype is created to clearly demonstrate what your product can do, allowing us to test ideas with users and help you attract more investors. We quickly validate our assumptions with each interaction in order to minimize the potential risks and deliver a more significant set of features that will help you achieve your business goals.",
    },
    {
      id: 5,
      name: "Optimize",
      header: "Data-driven enhancements",
      detail:
        "We assist in post-launch product’ testing and optimizing the metrics, redefining business ideas in accordance with proposed UX/UI Design solutions, and developing new features. Our team examines the initial assumptions, examines the data to identify missed opportunities, and devises improvements that can deliver positive results.",
    },
  ]
  return (
    <div
      className="tabs-container"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-duration="1500"
    >
      <div className="tabs-wrapper">
        {tabs.map(tab => (
          <p
            className={tab.id <= state.id ? "tab-active" : "tab"}
            onClick={() => setState(tab)}
            key={tab.id}
          >
            {tab.name}
          </p>
        ))}
      </div>
      <p className="header">{state.header}</p>
      <p className="detail">{state.detail}</p>
    </div>
  )
}

export default Tabs

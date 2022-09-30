import React from "react"
import "./accordian.scss"
function AnswerOne() {
  return (
    <div className="paragraph-wrapper">
      <p>
        Custom software development is also known as bespoke or tailor-made
        software development. When building it, you custom-tailor the software
        to cater to a specific group of users with a specific need. A
        custom-made application is built with your business needs in mind from
        the start. This means that the software suits the workflow of your
        company and you don't need to adjust anything to make it work for you.
      </p>
      <p>
        Before we start developing, we want to know what you're looking for in
        your product. That's why we ask you about your values and key
        expectations before proceeding to the development process. We're
        committed to finding the right features that will suit your needs, and
        our product strategy services ensure we get these just right.
      </p>
    </div>
  )
}

function AnswerTwo() {
  return (
    <div className="paragraph-wrapper">
      <p>
        You’re probably wondering whether a custom app will turn out to be more
        expensive than opting for a pre-developed one. The short answer is: Yes,
        at least in the short run.
      </p>
      <p>
        Because in the long run, the costs of adapting to predefined software,
        the costs of integration, scaling up, etc., might prove to be higher. Or
        it might even be that the money put into the deployment of this solution
        will be just thrown away if the software isn’t able to meet some crucial
        requirements.
      </p>
      <p>
        The bottom line is that the overall cost of a project is a highly
        individual matter, as it depends on a variety of factors, such as the
        number and nature of some specific features you want to include, the
        number of people involved, the country where your software agency is
        based, and many others.
      </p>
    </div>
  )
}

function AnswerThree() {
  return (
    <div className="paragraph-wrapper">
      <p>
        Custom solutions are made to address specific challenges. You can alter
        them if demand increases in the future, but they're carefully
        thought-out and well-researched. If you know your exact needs, then
        custom software would be your best choice. It is unlikely that
        off-the-shelf software will be good enough for a long time to come.
      </p>
      <p>
        Instead, if your business is at the very beginning of its journey and
        you are not quite sure about your market, audience, and potential
        challenges, off-the-shelf applications written with pre-existing
        frameworks may just be enough.
      </p>
      <p>
        codeFulcrum takes the time to learn all your business needs before
        providing tailored solutions. Whether you are new in the industry or
        have been doing this for years, we'll match your needs & expectations
        and work with you throughout the development process.
      </p>
    </div>
  )
}

function AnswerFour() {
  return (
    <div className="paragraph-wrapper">
      <header>
        Competition is strong these days and every company seems to be swearing
        to be the best. Here are some ways to tell if a certain company is
        providing services that work for you:
      </header>
      <ul>
        <li>
          <span>Check references.</span> Many people tend to not pay attention
          to marketing, but it can help a lot. However, you should always try
          asking around and look for genuine reviewers on platforms such as
          Clutch.
        </li>
        <li>
          {" "}
          <span> Meet the team.</span> You typically won’t get to know your app
          developers as well as your business partners, nevertheless you will be
          working closely with them for a few months. Make sure you share a good
          personality fit before starting any project.
        </li>
        <li>
          <span> Consider your needs.</span> There are different companies out
          there using different software. Some specialize in one thing, like
          databases, while others are more general and focus on multiple areas
          of expertise. It's important to decide what you would like the future
          of your company to look like and make sure your agency matches that
          vision.{" "}
        </li>
        <li>
          <span>Research them.</span> If you already know of a company you want
          to work with, look in their portfolio for the technologies they use.
          It helps to have some knowledge of technology as a whole, but at least
          this way you’ll be sure that the companies know what you’re talking
          about. Ask yourself if you like their style, their area of expertise,
          and their approach to clients—all of these can become critical issues
          if overlooked in the very beginning;
        </li>
        <li>
          <span>Ask questions.</span> Be sure to share your product idea with
          the company you're exploring working with and also be transparent
          about what you need from them. The good companies will take this
          mutual openness as an opportunity to develop a project that's in
          everyone's best interests. Don’t be afraid to talk, to ask questions,
          and to receive guidance. We always want our clients to succeed, so we
          can only assume it’s the same for the other agencies.
        </li>
      </ul>
    </div>
  )
}

export { AnswerOne, AnswerTwo, AnswerThree, AnswerFour }

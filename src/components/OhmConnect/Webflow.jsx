import React from "react"
import { Box } from "@mui/material"
function Webflow() {
  return (
    <div className="webflow">
      <div className="container">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="header">
            Enabling rapid go-to-market presence using WebFlow
          </p>
          <p className="sub-text">
            OhmConnect opened a Texas branch, and to engage with potential
            clients and users, their marketing and sales team needed a fresh new
            website built using WebFlow. This initiative demanded a time
            critical execution, so we quickly dedicated a Front-End development
            expert who swiftly worked in tandem with the Design team and
            successfully launched the new site within a month.
          </p>
        </div>
        <Box mt={5}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="header">Communication</p>
            <p className="text">
              The outstaffed team is expected to participate in their agile
              development process, regular team updates, standup meetings, and
              1-on-1’s.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="sub-text">
              We started working with OhmConnect in July 2020, and the project
              is still ongoing. Since the beginning, the communication has
              always been transparent and two-way because the client's
              requirements vary with every challenge.
            </p>

            <p className="sub-text">
              Usually, the assigned tasks are well defined enough by the
              client's product team for us to kick off the work, and sometimes
              the codeFulcrum teams huddle up to analyze the matters that need
              technical knowledge, do the required R&D, and inform the team
              about our discoveries. Once the suggested approach is approved by
              the client's team, which usually takes 1-3 working days, it is
              ready for development and the task gets into progress.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="text">
              We always strive to effectively use ours and our client's team
              members’ time and skills. To avoid any potential miscommunication
              and to get a typical office feel, we have integrated online
              meetings considering the time difference and the limitations due
              to global pandemic.
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="sub-text">
              <span> Weekly video meetings of the Project Managers: </span> The
              project managers from both parties take part in open video
              meetings in which they have discussions on ongoing problems and
              brainstorms solutions{" "}
            </p>
            <p className="sub-text">
              <span> Weekly video meetings with the engineering team: </span>{" "}
              The project manager of the client's team has sync-up calls with
              our developers where our team reports on the accomplished work,
              raises concerns, and shares suggestions.
            </p>
          </div>
        </Box>

        <Box mt={5}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="header">Website Development</p>
            <p className="sub-text">
              Every day, codeFulcrum's team members provide written answers to
              the following basic questions:
            </p>

            <p className="que">What did I do yesterday?</p>
            <p className="que"> What will I do today?</p>
            <p className="que"> What problems do I have?</p>

            <p className="sub-tect">
              This practice enables our client to clearly understand what each
              team member is doing and quickly solve emerging problems.
            </p>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Webflow

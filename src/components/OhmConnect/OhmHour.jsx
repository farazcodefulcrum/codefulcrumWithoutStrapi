import React from "react"
import { Grid } from "@mui/material"

function OhmHour() {
  const boxData = [
    {
      id: 1,
      text: "Emporia Energy",
    },
    {
      id: 2,
      text: "Sense",
    },
    {
      id: 3,
      text: "Sensibo Sky",
    },
    {
      id: 4,
      text: "Google Nest",
    },
    {
      id: 5,
      text: "Bosch HomeConnect",
    },
  ]
  return (
    <div className="ohm-hour">
      <div className="content">
        <div className="container">
          <div data-aos="fade-up" data-aos-duration="1000">
            <p className="header">Device Integration</p>

            <p className="text">
              OhmConnect rewards its users for saving energy; to earn more, the
              users are suggested to register their smart energy monitoring
              devices with the company's system.
            </p>

            <p className="text">
              OhmConnect has a ton of interfaces, and we are working on most of
              them. For instance, adding an interface to a smart device that
              controls air conditioning units. As mentioned earlier, by far, the
              codeFulcrum team has integrated the following devices with
              OhmConnect:
            </p>
          </div>
          <Grid
            container
            columnSpacing={{ md: 2, sm: 2, xs: 2 }}
            rowSpacing={2}
            my={{ md: 4, sm: 3, xs: 2 }}
          >
            {boxData.map(item => {
              return (
                <Grid item xs={6} sm={4} md={3} key={item.id}>
                  <div
                    className="box"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  >
                    {item.text}
                  </div>
                </Grid>
              )
            })}
          </Grid>
        </div>
        <div className="container" data-aos="fade-up" data-aos-duration="1300">
          <p className="header">Incentivized OhmHour Plan</p>

          <p className="bordered-text">
            An OhmHour is an energy saving event, usually an hour in length-
            sometimes more sometimes less- in which OhmConnect has committed to
            the grid that their customers will save energy. The users are
            alerted before the OhmHour starts by sending out messages and emails
            to them.
          </p>

          <p className="text">
            We created an internal tool for managing OhmHour events where the
            events are scheduled and the messages are sent to the users.
            codeFulcrum has been working on fine-tuning the way OhmConnect
            communicates with its users by integrating Twilio's API for SMS
            services and Active Campaign's API for the email ones.
          </p>

          <p className="text">
            We implemented algorithms to calculate their saved watts to later
            reward them based on their event performance.
          </p>
          <p className="text">
            The overall goal here is to make that process more efficient.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OhmHour

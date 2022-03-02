import React, { Component } from 'react'

import SchedulerCalendar from 'scheduler-calendar'
import 'scheduler-calendar/dist/index.css'

class Example extends Component {
  render() {
    return (
      <SchedulerCalendar
              availabilities={[
                {
                  day: "mon",
                  slots: [
                    {from: '09:00', to: '10:30'},
                    {from: '11:30', to: '13:00'}
                  ],
                  comment: "Test comment"
                },
                {
                  day: "2022-03-01",
                  slots: [
                    {from: '09:00', to: '10:30'},
                    {from: '11:30', to: '19:00'},
                  ],
                  isCommentEnabled: true,
                  comment: "oh pundeh"  

                },
              ]}
              availabilityType={'infinity'}
              duration={10}
              onIntervalChange={() => {}}
            />
    )
  }
}

export default Example;

import React, { useState, useEffect } from "react";
import {
  Inject,
  ScheduleComponent,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  EventSettingsModel,
} from "@syncfusion/ej2-react-schedule";
import axios from "../../axios-event";

export default function Calendar() {
  const [data, setData] = useState([
    // {
    //   Subject: "Paris",
    //   StartTime: new Date("2021-05-17T03:24:00"),
    //   EndTime: new Date("2021-05-17T05:00:00"),
    // },
    // {
    //   Subject: "Tokyo",
    //   StartTime: new Date("2021-05-17T03:24:00"),
    //   EndTime: new Date("2021-05-17T05:00:00"),
    // },
  ]);

  useEffect(() => {
    console.log("inside useEffect");
    axios
      .get("https://react-chodi-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        const temp = [];

        for (const key in response.data) {
          temp.push({
            Subject: response.data[key].eventName,
            StartTime: new Date(
              response.data[key].startDate +
                "T" +
                response.data[key].startTime +
                "-07:00",
            ),
            EndTime: new Date(
              response.data[key].endDate +
                "T" +
                response.data[key].endTime +
                "-07:00",
            ),
          });
        }

        setData([...data, ...temp]);
      });
  }, []);
  console.log("render");
  return (
    <ScheduleComponent
      currentView="Month"
      selectDate={new Date(2021, 4, 18)}
      eventSettings={{ dataSource: data }}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
}

import React, { useState } from "react";
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

export default function Calendar() {
  const [data, setData] = useState([
    {
      Subject: "Paris",
      StartTime: new Date(2021, 4, 18, 4, 0),
      EndTime: new Date(2021, 4, 18, 6, 30),
    },
  ]);

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

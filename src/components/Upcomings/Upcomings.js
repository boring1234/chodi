import React, { useState } from "react";
import Header from "./Header/Header";
import Upcoming from "./Upcoming/Upcoming";

export default function Upcomings(props) {
  const currentTime = new Date();
  const currentTimeMil = currentTime.getTime();

  //   const [upcomings, setUpcomings] = useState([]);
  const temp = [];
  var i;
  for (i = 0; i < props.event.length; i++) {
    const start = new Date(
      props.event[i].startDate + "T" + props.event[i].startTime,
    );
    const end = new Date(props.event[i].endDate + "T" + props.event[i].endTime);

    if (end.getTime() > currentTimeMil) {
      if (start.getTime() < currentTimeMil) {
        const data = {
          eventName: props.event[i].eventName,
          status: "live",
          start: start,
          end: end,
        };
        temp.push(data);
      } else {
        const data = {
          eventName: props.event[i].eventName,
          status: "upcoming",
          start: start,
          end: end,
        };
        temp.push(data);
      }
    }

    // setUpcomings([...temp]);
    // console.log(upcomings);
  }

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          width: "1300px",
          margin: "auto",
          // backgroundColor: "green",
          backgroundColor: "rgba(244, 244, 244, 0.73)",
        }}
      >
        <div
          style={{
            textAlign: "left",
            margin: "20px",
            fontSize: "2rem",
          }}
        >
          Upcoming Events
        </div>
        <div
          style={{
            textAlign: "center",
            width: "1015px",
            margin: "auto",
          }}
        >
          <Header />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "1015px",
            margin: "auto",
          }}
        >
          {temp.map((ele) => (
            <Upcoming
              eventName={ele.eventName}
              status={ele.status}
              start={ele.start}
              end={ele.end}
            />
          ))}
        </div>
      </div>
    </div>
  );
  //   return <Upcoming eventName="hello" status="live" start="2021" end="2021" />;
}

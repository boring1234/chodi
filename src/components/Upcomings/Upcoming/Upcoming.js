import React from "react";

export default function Upcoming(props) {
  const statusLive = "rgba(47, 222, 0, 0.73)";
  const statusUpcoming = "rgba(201, 222, 0, 0.73)";
  let statusColor;
  if (props.status === "live") {
    statusColor = statusLive;
  }
  if (props.status === "upcoming") {
    statusColor = statusUpcoming;
  }

  //props.status === "live" or "Upcoming"
  //live === red, upcoming ===grey
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          width: "250px",
          backgroundColor: "rgba(221, 221, 221, 0.73)",
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {props.eventName}
      </div>
      <div
        style={{
          marginLeft: "5px",
          width: "250px",
          backgroundColor: statusColor,
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {props.status}
      </div>
      <div
        style={{
          marginLeft: "5px",
          width: "250px",
          backgroundColor: "rgba(221, 221, 221, 0.73)",
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {props.start.toLocaleDateString() +
          " " +
          props.start.toLocaleTimeString()}
      </div>
      <div
        style={{
          marginLeft: "5px",
          width: "250px",
          backgroundColor: "rgba(221, 221, 221, 0.73)",
          display: "flex",
          flexWrap: "wrap",
          textAlign: "center",
        }}
      >
        {props.end.toLocaleDateString() + " " + props.end.toLocaleTimeString()}
      </div>
    </div>
  );
}

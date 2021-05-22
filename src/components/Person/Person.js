import React from "react";

export default function Person(props) {
  const decline = "rgba(178, 31, 0, 0.73)";
  const accept = "rgba(47, 222, 0, 0.73)";
  const tentative = "rgba(201, 222, 0, 0.73)";
  let statusColor;
  if (props.status === "Attending") {
    statusColor = accept;
  }
  if (props.status === "Declining") {
    statusColor = decline;
  }
  if (props.status === "Tentative") {
    statusColor = tentative;
  }
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
        {props.name}
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
        {props.phoneNumber}
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
        {props.email}
      </div>
    </div>
  );
}

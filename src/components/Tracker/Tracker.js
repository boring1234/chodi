import React from "react";

export default function Tracker(props) {
  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        alignItems: "center",
        // alignContent: "center",
        // justifyContent: "center",
      }}
    >
      <div
        style={{
          borderRadius: "500px",
          height: "50px",
          width: "50px",
          backgroundColor: "#6DDCED",
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>{props.number}</div>
      </div>
      <div>{props.title}</div>
    </div>
  );
}

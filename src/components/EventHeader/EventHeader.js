import React from "react";

export default function EventHeader() {
  return (
    <div
      style={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "space-evenly",
        margin: "10px",
        padding: "20px",
        width: "100%",
      }}
    >
      <div style={{ width: "100px", height: "1px" }}></div>
      <div>
        <b>EVENT</b>
      </div>
      <div>
        <b>ATTENDEE TYPE</b>
      </div>
      <div>
        <b>EVENT START</b>
      </div>
      <div>
        <b>EVENT END</b>
      </div>
      <div>
        <b>DAY</b>
      </div>
      <div>
        <b>REGISTERED</b>
      </div>
      <div>
        <b>STATUS</b>
      </div>
    </div>
  );
}

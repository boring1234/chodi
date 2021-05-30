import React from "react";

export default function EventFund(props) {
  return (
    <div
      style={{
        border: "1px dotted #DDDDDD",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        margin: "10px",
        borderRadius: "25px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img
          style={{
            borderRadius: "500px",
            border: "0.5px solid black",
            width: "100px",
            height: "100px",
          }}
          src={props.eventPicture}
        ></img>

        <div>
          <div>{props.eventName}</div>
          <div>
            <b>Start: </b>
            {props.startDate}
          </div>
          <div>
            <b>End: </b>
            {props.endDate}
          </div>
        </div>
      </div>
    </div>
  );
}

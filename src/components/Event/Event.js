import React from "react";
//day endDate name picture registered startDate status type
export default function Event(props) {
  return (
    <div
      style={{
        border: "1px dotted #DDDDDD",
        display: "flex",
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
        <div>{props.eventName}</div>
        <div>{props.attnType}</div>
        <div>
          <div>{props.startDate}</div>
          <div>{props.startTime}</div>
        </div>
        <div>
          <div>{props.endDate}</div>
          <div>{props.endTime}</div>
        </div>
        <div>{props.status}</div>
        <button onClick={props.onDelete}>Delete Event</button>
      </div>
    </div>
  );
}

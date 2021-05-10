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
          src={props.picture}
        ></img>
        <div>{props.name}</div>
        <div>{props.type}</div>
        <div>{props.startDate}</div>
        <div>{props.endDate}</div>
        <div>{props.day}</div>
        <div>{props.registered}</div>
        <div>{props.status}</div>
      </div>
      {/* <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        <div onClick={props.click}>
          <b>EDIT &gt;&gt;</b>
        </div>
      </div> */}
    </div>
  );
}

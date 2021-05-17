import React, { useState } from "react";
import DoubleArrowRight from "./doubleArrowRight.png";
//day endDate name picture registered startDate status type
export default function Event(props) {
  const [expansion, setExpansion] = useState(false);

  const expansionHandler = () => {
    setExpansion(!expansion);
    console.log(expansion);
  };

  //

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
      <div onClick={expansionHandler} style={{ alignSelf: "flex-end" }}>
        <img
          style={{ width: "10px", marginLeft: "5px", marginRight: "10px" }}
          src={DoubleArrowRight}
        />
      </div>
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
      </div>
      {expansion ? (
        <button
          onClick={props.onDelete}
          style={{ width: "200px", margin: "10px 0" }}
        >
          Delete Event
        </button>
      ) : null}
    </div>
  );
}

import React from "react";

export default function Budget() {
  return (
    <div
      style={{
        width: "25rem",
        height: "25rem",
        border: "1px solid black",
        borderRadius: "50px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        fontSize: "2rem",
        alignItems: "center",
      }}
    >
      <div>
        <strong>Total Budget</strong>
      </div>
      <div>
        <strong>$ 1,001</strong>
      </div>
    </div>
  );
}

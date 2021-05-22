import React from "react";

export default function PersonHeader() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "purple" }}>
        Invites RSPV
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        Status
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        Contact details
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        Email
      </div>
    </div>
  );
}

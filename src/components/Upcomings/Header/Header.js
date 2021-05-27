import React from "react";

export default function Header() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "purple" }}>
        Event
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        Status
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        Start
      </div>
      <div style={{ width: "250px", fontSize: "1.5rem", color: "grey" }}>
        End
      </div>
    </div>
  );
}

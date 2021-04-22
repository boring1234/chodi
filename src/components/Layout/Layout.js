import React from "react";
import MenuIcon from "./hamburger.jpeg";
import DownArrow from "./downarrow.jpeg";

const layout = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          backgroundColor: "#ebebeb",
          fontSize: "1.2rem",
          width: "15.625rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div style={{ margin: "15px 0 15px 15px" }}>(ChoDi img LOGO)</div>
        <div
          style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
        ></div>
        <div style={{ margin: "15px 0 15px 15px" }}> Events</div>
        <div
          style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
        ></div>
        <div style={{ margin: "15px 0 15px 15px" }}> Agenda</div>
        <div
          style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
        ></div>
        <div style={{ margin: "15px 0 15px 15px" }}> Funds</div>
        <div
          style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
        ></div>
        <div style={{ margin: "15px 0 15px 15px" }}> Crm</div>
        <div
          style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
        ></div>
        <div style={{ margin: "15px 0 15px 15px" }}> Report</div>
      </div>
      <div
        style={{
          display: "flex",
          boxSizing: "border-box",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            justifyContent: "space-between",
            border: "0.5px solid #bfbbba",
            backgroundColor: "#ebebeb",
            // width: "100%",
            height: "30px",
          }}
        >
          <div>
            <img style={{ width: "40px" }} src={MenuIcon} />
          </div>
          <div>
            Account Setting
            <img style={{ width: "10px" }} src={DownArrow} />
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default layout;

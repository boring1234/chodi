import React, { useContext } from "react";
import MenuIcon from "./hamburger.jpeg";
import DownArrow from "./downarrow.jpeg";
import { Route, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  let sidebar = (
    <div
      style={{
        backgroundColor: "#ebebeb",
        fontSize: "1.2rem",
        width: "20%",
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <div style={{ margin: "15px 0 15px 15px" }}>(ChoDi img LOGO)</div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/upcoming">Upcoming Events</Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/events">Events</Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/agenda">Agenda</Link>
      </div>
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
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/expenses">Report</Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/pm">Project Management</Link>
      </div>
    </div>
  );
  let rightPortionStyle = {
    display: "flex",
    boxSizing: "border-box",
    flexDirection: "column",
    left: "20%",
    width: "80%",
    position: "absolute",
  };

  if (props.hide) {
    sidebar = null;
    rightPortionStyle = {
      display: "flex",
      boxSizing: "border-box",
      flexDirection: "column",
      width: "100%",
    };
  }
  console.log(authCtx.isLoggedIn);
  return (
    <div style={{ display: "flex" }}>
      {!authCtx.isLoggedIn ? null : sidebar}

      <div style={rightPortionStyle}>
        <div
          style={{
            display: "flex",
            boxSizing: "border-box",
            justifyContent: "space-between",
            border: "0.5px solid #bfbbba",
            backgroundColor: "#ebebeb",
            height: "30px",
          }}
        >
          {!authCtx.isLoggedIn ? null : (
            <div onClick={props.click}>
              <img style={{ width: "40px" }} src={MenuIcon} />
            </div>
          )}
          {!authCtx.isLoggedIn ? (
            <div style={{ margin: "auto" }}>
              <Link to="/auth">Sign In/Up</Link>
            </div>
          ) : (
            <div>
              Account Setting
              <img style={{ width: "10px" }} src={DownArrow} />
            </div>
          )}
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

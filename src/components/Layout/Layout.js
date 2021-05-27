import React, { useContext } from "react";
import MenuIcon from "./hamburger.jpeg";
import DownArrow from "./downarrow.jpeg";
import LogoutIcon from "./logout.jpeg";
import Logo from "./logo.png";
import { Route, Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import PieChartPm from "../Chart/PieChartPm";
import PieChart from "../Chart/PieChart";

const Layout = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
    history.replace("/");
  };
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
      <div
        onClick={() => {
          history.replace("/");
        }}
      >
        <img src={Logo} style={{ width: "100%" }} />
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      {/* <div style={{ margin: "15px 0 15px 15px" }}>
        <Link
          to="/upcoming"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Upcoming Events
        </Link>
      </div>

      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div> */}
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/events" style={{ color: "inherit", textDecoration: "none" }}>
          Events
        </Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/fund" style={{ color: "inherit", textDecoration: "none" }}>
          Fund
        </Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/agenda" style={{ color: "inherit", textDecoration: "none" }}>
          Agenda
        </Link>
      </div>
      {/* <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}> Funds</div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}> Crm</div> */}
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link
          to="/expenses"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Report
        </Link>
      </div>
      <div
        style={{ width: "100%", height: "0.2px", backgroundColor: "#bfbbba" }}
      ></div>
      <div style={{ margin: "15px 0 15px 15px" }}>
        <Link to="/pm" style={{ color: "inherit", textDecoration: "none" }}>
          Project Management
        </Link>
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
  if (!authCtx.isLoggedIn) {
    sidebar = null;
    rightPortionStyle = {
      display: "flex",
      boxSizing: "border-box",
      flexDirection: "column",
      width: "100%",
    };
  }

  // let narBarWidth = "80vw";
  // if (props.hide || !authCtx.isLoggedIn) {
  //   narBarWidth = "100vw";
  // }
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
            left: props.hide || !authCtx.isLoggedIn ? "0" : "20%",
            top: "0",
            width: props.hide || !authCtx.isLoggedIn ? "100vw" : "80vw",
            position: "fixed",
            zIndex: "9999",
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
            <div style={{ display: "flex" }}>
              <div style={{ margin: "0 30px" }}>
                <Link
                  to="profile"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  Account Setting
                </Link>
                <img style={{ width: "10px" }} src={DownArrow} />
              </div>
              <div style={{ margin: "0 30px" }} onClick={logoutHandler}>
                Log Out{" "}
                <img
                  style={{ width: "10px", height: "10px" }}
                  src={LogoutIcon}
                />
              </div>
            </div>
          )}
        </div>
        <div style={{ height: "30px" }}></div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;

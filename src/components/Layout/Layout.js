import React from "react";
import Aux from "../../hoc/Aux";
import "./Layout.css";

const layout = (props) => {
  return (
    <Aux>
      <div class="d-flex" id="wrapper">
        <div class="bg-light border-right" id="sidebar-wrapper">
          <div class="sidebar-heading">(ChoDi img LOGO)</div>
          <div class="list-group list-group-flush">
            <a href="#" class="list-group-item list-group-item-action bg-light">
              <b>Events</b>
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
              Agenda
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
              Funds
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
              Crm
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
              Report
            </a>
            <a href="#" class="list-group-item list-group-item-action bg-light">
              Chat
            </a>
          </div>
        </div>
        <div> nav, sidebar</div>
        <main
          className="container-fluid"
          style={{ backgroundColor: "rgba(122, 248, 94, 0.068)" }}
        >
          {props.children}
        </main>
      </div>
    </Aux>
  );
};

export default layout;

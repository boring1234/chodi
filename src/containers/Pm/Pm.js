import React, { Component } from "react";
import PieChartPm from "../../components/Chart/PieChartPm";
import BarChartPm from "../../components/Chart/BarChartPm";
import Person from "../../components/Person/Person";
import Budget from "../../components/Budget/Budget";
import PersonHeader from "../../components/PersonHeader/PersonHeader";
export default class Pm extends Component {
  state = {
    persons: [
      {
        name: "Jack",
        status: "Attending",
        phoneNumber: "714-000-0000",
        email: "jack@uci.edu",
      },
      {
        name: "Tom",
        status: "Declining",
        phoneNumber: "714-0010-0020",
        email: "tom@uci.edu",
      },
      {
        name: "Smith",
        status: "Tentative",
        phoneNumber: "714-0010-0020",
        email: "smith@uci.edu",
      },
    ],
  };
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <PieChartPm />
          <Budget />
          <BarChartPm />
        </div>
        <div
          style={{
            textAlign: "center",
            width: "1300px",
            margin: "auto",
            // backgroundColor: "green",
            backgroundColor: "rgba(244, 244, 244, 0.73)",
          }}
        >
          <div
            style={{
              textAlign: "left",
              margin: "20px",
              fontSize: "2rem",
            }}
          >
            Via website form
          </div>
          <div
            style={{
              textAlign: "center",
              width: "1015px",
              margin: "auto",
            }}
          >
            <PersonHeader />
          </div>
          <div
            style={{
              textAlign: "center",
              width: "1015px",
              margin: "auto",
              // backgroundColor: "green",
            }}
          >
            {this.state.persons.map((ele) => (
              <Person
                name={ele.name}
                status={ele.status}
                phoneNumber={ele.phoneNumber}
                email={ele.email}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

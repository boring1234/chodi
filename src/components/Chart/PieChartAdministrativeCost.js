import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import classes from "./PieChartAdministrativeCost.module.css";

class PieChartAdministrativeCost extends Component {
  state = {
    labels: [
      "Supplies",
      "Office Rental/Lease",
      "Utilities",
      "Staff Payroll",
      "Office Equipment",
    ],
    datasets: [
      {
        label: "Administrative Cost",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  render() {
    console.log("something");
    return (
      <div style={{ width: "40%", height: "40%" }}>
        <Pie
          data={this.state}
          width={400}
          height={400}
          options={{
            title: {
              display: false,
              text: "Administrative Cost",
              fontSize: 10,
            },
            legend: {
              display: true,
              position: "right",
            },
            maintainAspectRatio: false,
          }}
        />
      </div>
    );
  }
}

export default PieChartAdministrativeCost;

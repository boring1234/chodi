import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
import classes from "./PieChart.module.css";

class PieChart extends Component {
  state = {
    labels: ["Supplies", "Venue", "Food/Drinks", "Entertinment", "Decorations"],
    datasets: [
      {
        label: "Event Cost",
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
    return (
      <div style={{ width: "40%", height: "40%" }}>
        <Pie
          data={this.state}
          width={400}
          height={400}
          options={{
            title: {
              display: false,
              text: "Average Rainfall per month",
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

export default PieChart;

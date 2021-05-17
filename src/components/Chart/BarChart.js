import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class BarChart extends Component {
  state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Net Total",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  render() {
    return (
      <div>
        <Bar
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Net Total",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

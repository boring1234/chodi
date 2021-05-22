import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

class PieChartPm extends Component {
  state = {
    labels: ["Attending", "Declining", "Tentative"],
    datasets: [
      {
        label: "Invitees by category",
        backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00"],
        hoverBackgroundColor: ["#501800", "#4B5000", "#175000"],
        data: [65, 59, 80],
      },
    ],
  };

  render() {
    return (
      <div style={{ width: "30%", height: "30%" }}>
        <Pie
          data={this.state}
          width={400}
          height={400}
          options={{
            title: {
              display: true,
              text: "Invitees by category",
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

export default PieChartPm;

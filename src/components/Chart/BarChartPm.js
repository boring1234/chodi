import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class BarChartPm extends Component {
  state = {
    labels: ["Jack", "Smith", "Emmily", "Jason", "Mark"],
    datasets: [
      {
        label: "Event lead",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };
  render() {
    return (
      <div style={{ width: "30%", height: "30%" }}>
        <Bar
          data={this.state}
          width={400}
          height={400}
          options={{
            title: {
              display: true,
              text: "Event lead generation",
              fontSize: 20,
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

export default BarChartPm;

import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Expenses.module.css";
import PieChart from "../../components/Chart/PieChart";
import Category from "../../components/Category/Category";

class Expenses extends Component {
  state = {
    expand: false,
  };

  render() {
    return (
      <div
        style={{
          width: "70%",
          margin: "auto",
        }}
      >
        <div>
          <PieChart />
          <Category name="Utilities" total="$15,000" />
          <Category name="food/drinks" total="$3,000" />
        </div>
      </div>
    );
  }
}

export default Expenses;

import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import classes from "./Expenses.module.css";
import PieChart from "../../components/Chart/PieChart";
import BarChart from "../../components/Chart/BarChart";
import PieChartAdministrativeCost from "../../components/Chart/PieChartAdministrativeCost";
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
          <BarChart />
          <Category
            name="Earned so far"
            total="$2,443
"
          />
          <Category
            name="Bills Paid"
            total="$247"
            summary="$94 budget remaining"
          />
          <Category
            name="Current Spend"
            total="$1,503"
            summary="$2.3k less than Aug"
          />
          <PieChart />
          <Category name="Utilities" total="$15,000" summary="15% of spend" />
          <Category name="food/drinks" total="$3,000" summary="15% of spend" />
          <Category name="venue" total="$3,000" summary="15% of spend" />
          <PieChartAdministrativeCost />
          <Category
            name="Office Equipment"
            total="$1,503
"
            summary="70% of spend"
          />
          <Category
            name="Miscellaneous"
            total="$200
"
            summary="15% of spend"
          />
        </div>
      </div>
    );
  }
}

export default Expenses;

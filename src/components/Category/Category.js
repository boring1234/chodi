import React, { Component } from "react";
import rightArrow from "../../assets/greater.png";

class Category extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(241, 239, 227)",
        }}
      >
        <div>
          <div>
            <b>{this.props.name}</b>
          </div>
          <div style={{ fontWeight: "lighter" }}>{this.props.summary}</div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>{this.props.total}</div>
          <div style={{ padding: "0 4px" }}>
            <image src={rightArrow} style={{ width: "10px" }}></image>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;

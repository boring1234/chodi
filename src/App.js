import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Expenses />
        </Layout>
      </div>
    );
  }
}

export default App;

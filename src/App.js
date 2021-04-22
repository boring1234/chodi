import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";
import Events from "./containers/Events/Events";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    hideSideabr: false,
  };

  handdleHideSidebar = () => {
    const showSidebar = this.state.hideSideabr;
    this.setState({ hideSideabr: !showSidebar });
    console.log("CLICKED");
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout click={this.handdleHideSidebar} hide={this.state.hideSideabr}>
            <Route path="/expenses" component={Expenses} />
            <Route path="/events" component={Events} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

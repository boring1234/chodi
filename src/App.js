import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";
import Events from "./containers/Events/Events";
import Pm from "./containers/Pm/Pm";
import Upcoming from "./containers/Upcoming/Upcoming";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import Calendar from "./containers/Calendar/Calendar";

class App extends Component {
  state = {
    hideSideabr: false,
  };

  handdleHideSidebar = () => {
    const showSidebar = this.state.hideSideabr;
    this.setState({ hideSideabr: !showSidebar });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Layout click={this.handdleHideSidebar} hide={this.state.hideSideabr}>
            <Route path="/expenses" component={Expenses} />
            <Route path="/events" component={Events} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/pm" component={Pm} />
            <Route path="/agenda" component={Calendar} />
          </Layout>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

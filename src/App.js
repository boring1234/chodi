import React, { Component, useContext, useState } from "react";
import Layout from "./components/Layout/Layout";
import Expenses from "./containers/Expenses/Expenses";
import Events from "./containers/Events/Events";
import Pm from "./containers/Pm/Pm";
import Upcoming from "./containers/Upcoming/Upcoming";
import { BrowserRouter } from "react-router-dom";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import Calendar from "./containers/Calendar/Calendar";
import AuthPage from "./containers/AuthPage/AuthPage";
import AuthContext, { AuthContextProvider } from "./store/auth-context";
import HomePage from "./containers/HomePage/HomePage";
import ProfilePage from "./containers/ProfilePage/ProfilePage";
/*
const App = () => {
  const authCtx = useContext(AuthContext);
  const [hideStatus, setHideStatus] = useState(true);

  const handdleHideSidebar = () => {
    const showSidebar = hideStatus;
    setHideStatus(!showSidebar);
  };

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Layout click={handdleHideSidebar} hide={hideStatus}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            {!authCtx.isLoggedIn && <Route path="/auth" component={AuthPage} />}

            {authCtx.isLoggedIn && (
              <Route path="/events">
                <Events />
              </Route>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </AuthContextProvider>
  );
};
export default App;
*/

class App extends Component {
  static contextType = AuthContext;
  state = {
    hideSideabr: true,
  };

  handdleHideSidebar = () => {
    const showSidebar = this.state.hideSideabr;
    this.setState({ hideSideabr: !showSidebar });
  };

  render() {
    console.log(this.context.isLoggedIn);
    return (
      // <AuthContextProvider>
      //   <BrowserRouter>
      <Layout click={this.handdleHideSidebar} hide={this.state.hideSideabr}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/auth" component={AuthPage} />

          {this.context.isLoggedIn && (
            <Route path="/expenses" component={Expenses} />
          )}
          {this.context.isLoggedIn && (
            <Route path="/events" component={Events} />
          )}

          {this.context.isLoggedIn && (
            <Route path="/upcoming" component={Upcoming} />
          )}

          {this.context.isLoggedIn && <Route path="/pm" component={Pm} />}

          {this.context.isLoggedIn && (
            <Route path="/agenda" component={Calendar} />
          )}
          {this.context.isLoggedIn && (
            <Route path="/profile" component={ProfilePage} />
          )}
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Layout>
      //   </BrowserRouter>
      // </AuthContextProvider>
    );
  }
}

export default App;

/*
class ComponentImpl extends Component {
  // static contextType = AuthContext;
  state = {
    hideSideabr: true,
  };

  handdleHideSidebar = () => {
    const showSidebar = this.state.hideSideabr;
    this.setState({ hideSideabr: !showSidebar });
  };

  render() {
    console.log(this.props.appContext.isLoggedIn);
    return (
      <AuthContextProvider>
        <BrowserRouter>
          <Layout click={this.handdleHideSidebar} hide={this.state.hideSideabr}>
            <Route path="/" exact component={HomePage} />
            <Route path="/auth" component={AuthPage} />

            <Route path="/expenses" component={Expenses} />
            <Route path="/events" component={Events} />

            <Route path="/upcoming" component={Upcoming} />

            <Route path="/pm" component={Pm} />

            <Route path="/agenda" component={Calendar} />
          </Layout>
        </BrowserRouter>
      </AuthContextProvider>
    );
  }
}

function App() {
  let appContext = useContext(AuthContext);

  return <ComponentImpl appContext={appContext}></ComponentImpl>;
}
export default App;
*/

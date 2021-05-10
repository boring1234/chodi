import React, { Component } from "react";
import photo0 from "./Clinic.jpg";
import axios from "../../axios-event";
import NewEvent from "../../components/NewEvent/NewEvent";
import Aux from "../../hoc/Aux";
import Edtr from "../../components/Edtr/Edtr";
import Event from "../../components/Event/Event";
import EventHeader from "../../components/EventHeader/EventHeader";
import Tracker from "../../components/Tracker/Tracker";

class Events extends Component {
  state = {
    hideDetails: true,
    hideAdd: true,
    leftSize: "100%",
    rightSize: "0%",
    event: [
      //day endDate name picture registered startDate status type
    ],
    events: 0,
    active: 0,
    archived: 0,
    registered: 0,
  };

  componentDidMount() {
    axios
      .get("https://react-chodi-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        this.setState({ event: Object.values(response.data) });

        let counter = 0;
        for (let i = 0; i < this.state.event.length; i++) {
          if (this.state.event[i].status === "active") counter++;
        }
        this.setState({ active: counter });

        let counter1 = 0;
        for (let i = 0; i < this.state.event.length; i++) {
          if (this.state.event[i].status === "archived") counter1++;
        }
        this.setState({ archived: counter1 });

        let counter2 = 0;
        for (let i = 0; i < this.state.event.length; i++) {
          if (this.state.event[i].registered !== "") counter2++;
        }
        this.setState({ registered: counter2 });
      });
  }

  handleClickMore = () => {
    const hideDetails = this.state.hideDetails;

    if (hideDetails) {
      this.setState({ leftSize: "40%", rightSize: "60%" });
    } else {
      this.setState({ leftSize: "100%", rightSize: "0%" });
    }

    this.setState({ hideDetails: !hideDetails });
    console.log("CLICKED");
  };

  handdleClickAdd = () => {
    const hideAdd = this.state.hideAdd;
    this.setState({ hideAdd: !hideAdd });
  };

  render() {
    let rightSide = (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          width: this.state.rightSize,
          borderLeft: this.state.hideDetails ? null : "1px solid black",
        }}
      >
        <Edtr />
      </div>
    );

    return (
      <div style={{ display: "flex", boxSizing: "border-box" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            width: this.state.leftSize,
          }}
        >
          <div
            style={{
              display: "flex",
              boxSizing: "border-box",
              justifyContent: "space-evenly",
            }}
          >
            <Tracker number={this.state.event.length} title={"events"} />
            <Tracker number={this.state.registered} title="registered" />
            <Tracker number={this.state.active} title="active" />
            <Tracker number={this.state.archived} title="archived" />
          </div>

          <EventHeader />
          {this.state.event.map((evnt) => (
            <Event
              day={evnt.day}
              endDate={evnt.endDate}
              name={evnt.name}
              picture={evnt.picture}
              registered={evnt.registered}
              startDate={evnt.startDate}
              status={evnt.status}
              type={evnt.type}
              click={this.handleClickMore}
            />
          ))}
          <button style={{ width: "300px" }} onClick={this.handdleClickAdd}>
            Add an event
          </button>
          {this.state.hideAdd ? null : <Edtr />}
        </div>
        {rightSide}
      </div>
    );
  }
}

export default Events;

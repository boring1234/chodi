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
      //      { attnType: "Ticketing/Registration"
      // endDate: "2021-05-19"
      // endTime: "17:47"
      // eventName: "dog 5"
      // eventPicture: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBgVFRUZGRgZHCEdGxsaGhsdJB8hGxsbGxobIRsbIS0kGyIqIRsaJjclKi4xNDQ0HSM6PzozPi0zNDEBCwsLEA8QHxISHzMqJCozMzMzMzMzNTMzNDMzMzMzMzMxMzMzMzMzMzMzMzMzMzMzMzM0MzMzMzMzMzMzNTMzM//AABEIAOAA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQIDBgABB//EAD4QAAECBAQEBAQFAwIGAwEAAAECEQADITEEEkFRBSJhcROBkaEGMrHwQlLB0eEUYvEVI1NygpKTwjOy0iT/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMABAUG/8QAKxEAAgICAgEDAwMFAQAAAAAAAAECEQMhEjFBEyJRBGFxgZGxMkKhwfAU/9oADAMBAAIRAxEAPwDX8TxakFwGSLVuYXyeJEnKcxUr8NNIXYieqchRSyUpVzc2guWi/AYdKpZWFPmLIa72DEx8dHGox934OxD7DJSoN+I6PEkSCkKLMbQv4fh5iQZZISt33cd4JxGIUhDkhVWd6vtEkqlSYRpg1lvmBi7DA5akdDChMyXkckg97xJGMNEpAawJjrxTfgzVj+Qo0c06QUhcIs6ksCRWGEqbasevgnaJSiNAqJQPLXF4j0YPRGSolHR0dDinhgLEGC1GAp64lkeikEBzq0gDEoSEkvUabwROWSe8LsVML7jSPNyyT0dEUKsTM5rDaKOKycyAlEv5BzEfvE5yy5TRz7QqXiJicwB+ahG8c0o27XgcCmcPW7BiWehdoQ4gF41UzDFPOpwTTKNelIST5fiKUyMoHk0Ww5N7FkJVqgecYJnIYmBZh2Fd47YkWDKERCIkqIOYqKyqYKQO9GgpUDTYZAGmIxUkyJSES1iaCfEWpTpUDYBOntbV4hiUZVMGNBa1oWqVQQUitzA40ZHrGOiXnHRjH"
      // startDate: "2021-06-03"
      // startTime: "19:49"
      // status: "active" }
    ],
    events: 0,
    active: 0,
    archived: 0,
  };

  componentDidMount() {
    axios
      .get("https://react-chodi-default-rtdb.firebaseio.com/events.json")
      .then((response) => {
        const temp = [];

        for (const key in response.data) {
          temp.push({
            id: key,
            attnType: response.data[key].attnType,
            endDate: response.data[key].endDate,
            endTime: response.data[key].endTime,
            eventName: response.data[key].eventName,
            eventPicture: response.data[key].eventPicture,
            startDate: response.data[key].startDate,
            startTime: response.data[key].startTime,
            status: response.data[key].status,
          });
        }

        this.setState({ event: [...temp] });

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
      });
  }
  onSaveHandler = (data) => {
    const newData = { ...data };
    console.log(newData);
    this.setState({ event: [...this.state.event, newData] });
  };

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

  deleteButtonHandler = (id) => {
    this.setState(
      {
        event: this.state.event.filter((item) => item.id != id),
      },
      () =>
        axios.delete(
          `${"https://react-chodi-default-rtdb.firebaseio.com"}/events/${id}.json`,
        ),
    );
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
            <Tracker number={this.state.active} title="active" />
            <Tracker number={this.state.archived} title="archived" />
          </div>

          <EventHeader />
          {this.state.event.map((evnt, index) => (
            <Event
              key={evnt.id}
              attnType={evnt.attnType}
              endDate={evnt.endDate}
              endTime={evnt.endTime}
              eventName={evnt.eventName}
              eventPicture={evnt.eventPicture}
              startTime={evnt.startTime}
              startDate={evnt.startDate}
              status={evnt.status}
              onDelete={() => this.deleteButtonHandler(evnt.id)}
              click={this.handleClickMore}
            />
          ))}
          <button style={{ width: "300px" }} onClick={this.handdleClickAdd}>
            Add an event
          </button>
          {this.state.hideAdd ? null : <Edtr onSave={this.onSaveHandler} />}
        </div>
        {rightSide}
      </div>
    );
  }
}

export default Events;

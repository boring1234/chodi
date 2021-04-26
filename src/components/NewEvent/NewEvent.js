import React, { Component } from "react";
import axios from "../../axios-event";

class NewEvent extends Component {
  state = {
    picture: "",
    name: "",
    time: "",
    location: "",
    description: "",
  };

  handleAddingEvent = () => {
    // const order = {
    //   id: 3,
    //   name: "name 3",
    //   description: "description 3",
    //   location: "newport beach",
    //   time: "midnight",
    // };
    axios.post(
      "https://react-chodi-default-rtdb.firebaseio.com/event.json",
      this.state,
    );
    this.setState({
      picture: "",
      name: "",
      time: "",
      location: "",
      description: "",
    });
  };

  render() {
    return (
      <div>
        <h1>Add A New Event</h1>
        <label>picture</label>
        <input
          type="text"
          value={this.state.picture}
          onChange={(event) => this.setState({ picture: event.target.value })}
        />
        <label>name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <label>time</label>
        <input
          type="text"
          value={this.state.time}
          onChange={(event) => this.setState({ time: event.target.value })}
        />
        <label>location</label>
        <input
          type="text"
          value={this.state.location}
          onChange={(event) => this.setState({ location: event.target.value })}
        />
        <label>description</label>
        <input
          type="text"
          value={this.state.description}
          onChange={(event) =>
            this.setState({ description: event.target.value })
          }
        />
        <button onClick={this.handleAddingEvent}>Add Post</button>
      </div>
    );
  }
}

export default NewEvent;

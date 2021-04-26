import React, { Component } from "react";
import photo0 from "./Clinic.jpg";
import axios from "../../axios-event";
import NewEvent from "../../components/NewEvent/NewEvent";
import Aux from "../../hoc/Aux";

class Events extends Component {
  state = {
    event: [
      //   {
      //     picture: photo0,
      //     name: "Beach Day",
      //     time: "June 4th, 12pm-4pm PST",
      //     location: "Huntington Beach",
      //     description:
      //       "Bring your dog or puppy,as we panther with other non-profits and Chewy, to our annual Beach Day. There will be free food, games, and events.",
      //   },
    ],
  };

  componentDidMount() {
    axios
      .get("https://react-chodi-default-rtdb.firebaseio.com/event.json")
      .then((response) => {
        console.log(response);
        this.setState({ event: Object.values(response.data) });
        console.log(this.state.event);
      });

    // const order = {
    //   id: 3,
    //   name: "name 3",
    //   description: "description 3",
    //   location: "newport beach",
    //   time: "midnight",
    // };
    // axios.post(
    //   "https://react-chodi-default-rtdb.firebaseio.com/event.json",
    //   order,
    // );
  }

  render() {
    return (
      <div>
        {this.state.event.map((evnt) => (
          <Aux>
            <img
              style={{
                borderRadius: "500px",
                border: "0.5px solid black",
                width: "300px",
                height: "300px",
              }}
              src={evnt.picture}
            ></img>
            <div>
              <b>Event Name: </b>
              {evnt.name}
            </div>
            <div>
              <b>Event Date and Time: </b>
              {evnt.time}
            </div>
            <div>
              <b>Event Location: </b>
              {evnt.location}
            </div>
            <div>
              <b>Event Description: </b>
              {evnt.description}
            </div>
          </Aux>
        ))}

        <NewEvent />
      </div>
    );
  }
}

export default Events;

import React, { useState } from "react";
import axios from "../../axios-event";

export default function Edtr(props) {
  const [eventPicture, setEventPicture] = useState("");
  const [eventName, setEventName] = useState("");
  const [attnType, setAttnType] = useState("RSVP Collection");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [status, setStatus] = useState("active");

  const eventPictureHandler = (event) => {
    setEventPicture(event.target.value);
  };

  const eventNameHandler = (event) => {
    setEventName(event.target.value);
  };

  const attnTypeHandler = (event) => {
    setAttnType(event.target.value);
  };

  const startDateHandler = (event) => {
    setStartDate(event.target.value);
  };
  const endDateHandler = (event) => {
    setEndDate(event.target.value);
  };

  const startTimeHandler = (event) => {
    setStartTime(event.target.value);
  };

  const endTimeHandler = (event) => {
    setEndTime(event.target.value);
  };

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setEventPicture("");
    setEventName("");
    setAttnType("RSVP Collection");
    setStartDate("");
    setEndDate("");
    setStartTime("");
    setEndTime("");
    setStatus("active");

    const data = {
      id: Math.random(),
      eventPicture: eventPicture,
      eventName: eventName,
      attnType: attnType,
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
      status: status,
    };
    var d = new Date(data.startDate + "T" + data.startTime + "-07:00");
    var d1 = new Date(data.endDate + "T" + data.endTime + "-07:00");
    var milliseconds = d.getTime();
    var milliseconds1 = d1.getTime();
    if (milliseconds1 < milliseconds) {
      alert("End date and time cannot be earlier than start date and time !");
    } else {
      axios
        .post(
          "https://react-chodi-default-rtdb.firebaseio.com/events.json",
          data,
        )
        .then((res) => {
          console.log(res.data.name);
          const dataWithKey = { ...data, id_key: res.data.name };
          console.log(dataWithKey);
          props.onSave(dataWithKey);
        });
      // console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <p>EVENT PICTURE</p>
        <input
          type="text"
          value={eventPicture}
          name="eventPicture"
          onChange={eventPictureHandler}
          style={{ width: "400px" }}
        ></input>
        <p>EVENT NAME</p>
        <input
          type="text"
          value={eventName}
          name="eventName"
          onChange={eventNameHandler}
          style={{ width: "400px" }}
        ></input>
        <p>ATTENDEE TYPE</p>
        <select value={attnType} onChange={attnTypeHandler}>
          <option value="Ticketing/Registration">Ticketing/Registration</option>
          <option value="RSVP Collection">RSVP Collection </option>
        </select>
        <p>EVENT START</p>
        <input
          type="date"
          onChange={startDateHandler}
          value={startDate}
        ></input>
        <input
          type="time"
          onChange={startTimeHandler}
          value={startTime}
        ></input>
        <p>EVENT END</p>
        <input type="date" onChange={endDateHandler} value={endDate}></input>
        <input type="time" onChange={endTimeHandler} value={endTime}></input>
        <p>STATUS</p>
        <select value={status} onChange={statusHandler}>
          <option value="archived">archived</option>
          <option value="active">active</option>
        </select>
        <input type="submit" value="CREATE" />
      </form>
    </div>
  );
}

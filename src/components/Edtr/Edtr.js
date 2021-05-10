import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class Edtr extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ content: event.target.value });
  }

  handleSubmit(event) {
    alert("Text was submitted: " + this.state.content);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Event</h2>
        <h3>Provide details</h3>
        <Editor
          value={this.state.content}
          init={{
            height: 500,
            menubar: false,
          }}
          onEditorChange={this.handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Edtr;

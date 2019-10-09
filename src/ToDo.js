import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    const { text } = this.props.task;

    return (
      <li className="todo">
        <span>{text}</span>
        <span className="fa fa-edit" onClick={this.onEditClick}></span>
      </li>
    );
  }

  onEditClick = () => {
    this.props.makeTaskEditable(this.props.task);
  }
}

import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    return (
      <li class="todo">
        <span>{this.props.text}</span>
      </li>
    );
  }
}

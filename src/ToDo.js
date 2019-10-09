import React, { Component } from "react";

export default class ToDo extends Component {
  render() {
    const { text } = this.props.task;

    return (
      <li className="todo">
        <div className="d-inline-block">
          <span>{text}</span>
        </div>
        <div className="actions d-inline-block">
          <span className="fa fa-edit" onClick={this.onEditClick}></span>
          <span className="fa fa-remove" onClick={this.onRemoveClick}></span>
        </div>
      </li>
    );
  }

  onEditClick = () => {
    this.props.makeTaskEditable(this.props.task);
  }

  onRemoveClick = () => {
    if (!window.confirm("¿Seguro que deseas borrar esta tarea?")) return;
    this.props.removeTask(this.props.task);
  }
}

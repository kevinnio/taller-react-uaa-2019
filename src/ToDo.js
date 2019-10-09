import React, { Component } from "react";

export default class ToDo extends Component {
  constructor(props) {
    super();

    this.state = { completed: props.task.completed };
  }

  render() {
    const { text } = this.props.task;
    const { completed } = this.state;

    return (
      <li className={`todo ${completed && "completed"}`}>
        <div className="d-inline-block">
          <input type="checkbox" checked={completed} onChange={this.onCompleteClick} />
          <span className="text">{text}</span>
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

  onCompleteClick = (event) => {
    this.setState({ completed: event.target.checked }, () => {
      const { task } = this.props;
      this.props.editTask(task, {...task, completed: this.state.completed});
    });
  }
}

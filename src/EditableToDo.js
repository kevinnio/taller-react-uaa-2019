import React, { Component } from "react";

export default class EditableToDo extends Component {
  constructor(props) {
    super();

    this.state = { text: props.task.text };
  }

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <li className="editable todo">
          <div className="input-group">
            <input type="text" className="form-control" onInput={this.onInput} value={text} defaultValue={this.props.task.text}></input>
            <div className="input-group-append">
              <button className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </li>
      </form>
    );
  }

  onInput = (event) => {
    this.setState({ text: event.target.value });
  }

  onSubmit = () => {
    const { task, editTask } = this.props;

    editTask(task, { ...task, editable: false, text: this.state.text });
  }
}

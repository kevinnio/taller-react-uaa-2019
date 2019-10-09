import React, { Component } from "react";
import ToDo from "./ToDo";
import EditableToDo from "./EditableToDo";

export default class ToDoList extends Component {
  render() {
    return <div>{this.renderTaskList()}</div>;
  }

  renderTaskList() {
    const tasks = this.props.tasks.map((task) => {
      const props = {
        task,
        key: task.id,
        editTask: this.props.editTask,
        removeTask: this.props.removeTask,
        makeTaskEditable: this.props.makeTaskEditable
      };

      return task.editable ? <EditableToDo {...props} /> : <ToDo {...props} />;
    });

    if (tasks.length > 0) {
      return <ul className="todo-list list-unstyled">{tasks}</ul>;
    } else {
      return <p className="text-center">No hay tareas</p>;
    }

  }
}

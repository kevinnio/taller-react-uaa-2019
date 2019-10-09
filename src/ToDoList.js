import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoInput from "./ToDoInput";
import EditableToDo from "./EditableToDo";

export default class ToDoList extends Component {
  state = {
    tasks: [
      {
        id: 1,
        editable: false,
        text: "Lavar ropa"
      }
    ]
  }

  render() {
    return (
      <div>
        <ToDoInput addNewTask={this.addNewTask} />
        {this.renderTaskList()}
      </div>
    );
  }

  renderTaskList() {
    const tasks = this.state.tasks.map((task) => {
      const props = {
        task,
        key: task.id,
        editTask: this.editTask,
        removeTask: this.removeTask,
        makeTaskEditable: this.makeTaskEditable
      };

      return task.editable ? <EditableToDo {...props} /> : <ToDo {...props} />;
    });

    if (tasks.length > 0) {
      return <ul className="todo-list list-unstyled">{tasks}</ul>;
    } else {
      return <p className="text-center">No hay tareas pendientes</p>;
    }

  }

  addNewTask = (task) => {
    const { tasks } = this.state;
    tasks.push({
      id: tasks.length + 1,
      editable: false,
      text: task
    });
    this.setState({ tasks: tasks });
  }

  makeTaskEditable = task => {
    this.editTask(task, {...task, editable: true});
  }

  editTask = (originalTask, newTask) => {
    const { tasks } = this.state;

    const foundTask = this.findTask(originalTask);
    const index = tasks.indexOf(foundTask);
    tasks[index] = newTask;

    this.setState({ tasks });
  }

  findTask = (task) => {
    const { tasks } = this.state;

    const foundTask = tasks.find(t => t.id === task.id);
    if (!foundTask) throw new Error("Task not in array");

    return foundTask;
  }

  removeTask = (task) => {
    const { tasks } = this.state;

    const foundTask = this.findTask(task);
    const index = tasks.indexOf(foundTask);
    tasks.splice(index, 1);
    this.setState({ tasks });
  }
}

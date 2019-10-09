import React, { Component } from "react";
import ToDo from "./ToDo";
import ToDoInput from "./ToDoInput";

export default class ToDoList extends Component {
  state = {
    tasks: ["Lavar ropa", "Hacer tarea", "Sacar al perro"]
  }

  render() {
    return (
      <div>
        <ToDoInput addNewTask={this.addNewTask} />
        <ul className="todo-list list-unstyled">
          {this.state.tasks.map(task => <ToDo text={task} />)}
        </ul>
      </div>
    );
  }

  addNewTask = (task) => {
    const { tasks } = this.state;
    tasks.push(task);
    this.setState({ tasks: tasks });
  }
}

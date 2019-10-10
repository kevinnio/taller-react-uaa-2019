import React, { Component } from "react";
import ToDoInput from "./ToDoInput";
import ToDoList from "./ToDoList";
import './App.css';

export default class App extends Component {
  state = { tasks: [] };

  componentDidMount() {
    this.addNewTask('Lavar la ropa');
    this.addNewTask('Sacar al perro');
    this.addNewTask('Hacer la tarea');
  }

  render() {
    const props = {
      addNewTask: this.addNewTask,
      makeTaskEditable: this.makeTaskEditable,
      editTask: this.editTask,
      findTask: this.findTask,
      removeTask: this.removeTask
    }

    const uncompletedTasks = this.state.tasks.filter(t => t.completed === false);
    const completedTasks = this.state.tasks.filter(t => t.completed === true);

    return (
      <div className="todo-list-app">
        <ToDoInput addNewTask={this.addNewTask} />
        <ToDoList {...props} tasks={uncompletedTasks} />
        <hr/>
        <details>
          <br/>
          <summary>Tareas completadas</summary>
          <ToDoList {...props} tasks={completedTasks} />
        </details>
      </div>
    )
  }

  addNewTask = (task) => {
    const { tasks } = this.state;
    tasks.push({
      id: tasks.length + 1,
      editable: false,
      completed: false,
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

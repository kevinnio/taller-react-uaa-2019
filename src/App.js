import React, { Component } from "react";
import ToDoList from "./ToDoList";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="todo-list-app">
        <ToDoList />
      </div>
    )
  }
}

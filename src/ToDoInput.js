import React, { Component } from "react";

export default class ToDoInput extends Component {
  render() {
    return (
      <form className="todo-input" onSubmit={this.onSubmit}>
        <div className="input-group">
          <input id="newTask" type="text" className="form-control" placeholder="Nueva tarea..." />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Agregar</button>
          </div>
        </div>
      </form>
    );
  }

  onSubmit = (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Agrega la nueva tarea
    const input = document.getElementById("newTask");
    this.props.addNewTask(input.value);

    // Limpia y enfoca el input para seguir agregando tareas
    input.value = "";
    input.focus();
  }
}

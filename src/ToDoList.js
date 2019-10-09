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
    const tasks = this.state.tasks.map((task) => {
      const props = {
        task,
        key: task.id,
        editTask: this.editTask,
        makeTaskEditable: this.makeTaskEditable
      };

      return task.editable ? <EditableToDo {...props} /> : <ToDo {...props} />;
    });

    return (
      <div>
        <ToDoInput addNewTask={this.addNewTask} />
        <ul className="todo-list list-unstyled">
          {tasks}
        </ul>
      </div>
    );
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
    const foundTask = this.state.tasks.find(t => t.id === task.id);
    if (!foundTask) return;

    this.editTask(task, {...task, editable: true});
  }

  editTask = (originalTask, newTask) => {
    const { tasks } = this.state;

    const foundTask = tasks.find(t => t.id === originalTask.id);
    if (!foundTask) throw new Error("Task not in array");

    const index = tasks.indexOf(foundTask);
    tasks[index] = newTask;

    this.setState({ tasks });
  }
}

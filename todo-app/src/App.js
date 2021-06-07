import React from "react"
import "./assets/font-awsome/fontawesome-free-5.12.1-web/css/all.css"

import {TodoTitle, TodoListDiv, AddTodoDiv, AddTodo, ManageTodoList} from "./components"

function App() {
  return (
    <div className="container">
      <TodoTitle />

      <TodoListDiv />

      <AddTodoDiv />
      <AddTodo />
      <ManageTodoList />
    </div>
  );
}

export default App;

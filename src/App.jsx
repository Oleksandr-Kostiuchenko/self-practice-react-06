import { useState } from "react";
import "./App.css";

import AppBar from "./components/AppBar/AppBar";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <>
      <AppBar />
      <TaskForm />
      <TaskList />
    </>
  );
}

export default App;

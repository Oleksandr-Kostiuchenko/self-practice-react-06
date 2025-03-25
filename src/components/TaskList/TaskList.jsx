import style from "./TaskList.module.css";
import Task from "../Task/Task";

import { useSelector } from "react-redux";

const getVisibleTasks = (tasks, filterData) => {
  switch (filterData) {
    case "active":
      return tasks.filter((task) => !task.completed);
    case "completed":
      return tasks.filter((task) => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.items);
  const statusFilter = useSelector((state) => state.filter.status);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={style.taskList}>
      {visibleTasks.map((el) => (
        <li key={el.id}>
          <Task task={el} />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;

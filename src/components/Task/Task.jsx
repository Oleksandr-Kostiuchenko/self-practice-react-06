import style from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasksSlice";
import { toggleCompleted } from "../../redux/tasksSlice";

import { RxCrossCircled } from "react-icons/rx";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div className={style.taskWrapper}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p className={style.taskText}>{task.text}</p>
      <button className={style.deleteBtn} onClick={handleDelete}>
        <RxCrossCircled className={style.deleteIcon} />
      </button>
    </div>
  );
};

export default Task;

import style from "./TaskForm.module.css";
import Button from "../Button/Button";

import { nanoid } from "nanoid";

import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.elements.text.value.trim() === "") {
      alert("Please enter task");
      return;
    }

    dispatch(
      addTask({
        id: nanoid(),
        completed: false,
        text: form.elements.text.value,
      })
    );
    form.reset();
  };

  return (
    <form
      className={style.formWrapper}
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        className={style.taskInput}
        type="text"
        name="text"
        placeholder="Enter task..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;

import style from "./AppBar.module.css";

import TaskCounter from "../TaskCounter/TaskCounter";
import StatusFilter from "../StatusFilter/StatusFilter";

const AppBar = () => {
  return (
    <header className={style.headerWrapper}>
      <div>
        <h2>Tasks:</h2>
        <TaskCounter />
      </div>

      <div>
        <h2>Filter by status:</h2>
        <StatusFilter />
      </div>
    </header>
  );
};

export default AppBar;

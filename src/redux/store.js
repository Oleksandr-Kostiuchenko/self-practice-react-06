import { configureStore } from "@reduxjs/toolkit";

import taskReducer from "./tasksSlice";
import filterReducer from "./filterSlice";

const loadState = () => {
  try {
    const stateFromLS = localStorage.getItem("state");
    if (stateFromLS === null) {
      return undefined;
    }

    return JSON.parse(stateFromLS);
  } catch (err) {
    alert("Something went wrong");
  }
};

const saveState = (state) => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("state", stringifiedState);
  } catch {
    alert("Something went wrong");
  }
};

const stateFromLS = loadState();

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filter: filterReducer,
  },
  preloadedState: stateFromLS,
});

store.subscribe(() => {
  saveState(store.getState());
});

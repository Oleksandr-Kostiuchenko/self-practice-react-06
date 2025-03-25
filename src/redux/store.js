import { configureStore } from "@reduxjs/toolkit";

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

const initialState = {
  tasks: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  filter: {
    status: "all",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "tasks/addTask":
      return {
        ...state,
        tasks: {
          items: [...state.tasks.items, action.payload],
        },
      };

    case "tasks/deleteTask":
      return {
        ...state,
        tasks: {
          items: state.tasks.items.filter((task) => task.id !== action.payload),
        },
      };

    case "tasks/toggleCompleted":
      return {
        ...state,
        tasks: {
          items: state.tasks.items.map((task) => {
            if (task.id !== action.payload) {
              return task;
            }
            return {
              ...task,
              completed: !task.completed,
            };
          }),
        },
      };

    case "filter/setStatusFilter":
      return {
        ...state,
        filter: {
          status: action.payload,
        },
      };

    default:
      return state;
  }
};

const stateFromLS = loadState();

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: stateFromLS,
});

store.subscribe(() => {
  saveState(store.getState());
});

/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

const TasksContext = createContext();

let modalAdd;
let modalDelete;

const initialState = {
  tasksArr: [],
  taskToDeleteId: null,
  isError: false,
  errorMessage: null
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_TASKS":
      return {
        ...state,
        tasksArr: action.payload
      };
    case "TOGGLE_DELETE_ID":
      return {
        ...state,
        taskToDeleteId: action.payload
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasksArr: action.payload,
        taskToDeleteId: null
      };
    case "ERROR":
      return {
        ...state,
        isError: true,
        errorMessage: action.payload
      };
    default:
      throw new Error("Unknown action type");
  }
}

function TasksProvider({ children }) {
  const [
    { tasksArr, errorMessage, isError, taskToDeleteId },
    dispatch
  ] = useReducer(reducer, initialState);

  useEffect(function() {
    async function fetchTasks() {
      try {
        const res = await fetch("/api/todos");
        const data = await res.json();
        dispatch({ type: "SET_TASKS", payload: data });
      } catch (err) {
        console.error(err);
        dispatch({
          type: "ERROR",
          payload: "There was an error loading tasks 😢"
        });
      }
    }
    fetchTasks();
  }, []);

  function toggleDeleteId(id = null) {
    dispatch({ type: "TOGGLE_DELETE_ID", payload: id });

    if (id) {
      modalDelete = document.getElementById("modal-delete");
      modalDelete.showModal();
    }
  }

  async function addTask(task) {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: task })
      });
      const data = await res.json();
      dispatch({ type: "SET_TASKS", payload: data });

      modalAdd = document.getElementById("modal-add");
      modalAdd.showModal();
    } catch (err) {
      console.error(err);
      dispatch({
        type: "ERROR",
        payload: "There was an error adding new task 😢"
      });
    }
  }

  async function deleteTask() {
    const id = taskToDeleteId;

    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      dispatch({ type: "DELETE_TASK", payload: data });
    } catch (err) {
      console.error(err);
    }
  }

  async function updateTaskStatus(id, status) {
    status = status === 1;
    try {
      const res = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status })
      });
      const data = await res.json();
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasksArr,
        errorMessage,
        isError,
        addTask,
        toggleDeleteId,
        updateTaskStatus,
        deleteTask
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);

  if (context === undefined)
    throw new Error("TasksContext used outside of TasksProvider");
  return context;
}

export { TasksProvider, useTasks };

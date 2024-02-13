/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from "react";

const TasksContext = createContext();

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
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasksArr: [action.payload, ...state.tasksArr]
      };
    case "MARK_AS_COMPLETE":
      const touchedToDo = state.toDosArr.find(
        todo => todo.id === action.payload.id
      );
      return {
        ...state,
        tasksArr: [...state.tasksArr, { ...touchedToDo, isCompleted: 1 }]
      };
    case "SET_DELETE_ID":
      return {
        ...state,
        taskToDeleteId: action.payload
      };
    case "DELETE_TASK":
      return {
        ...state,
        projects: state.tasksArr.filter(
          task => task.id !== state.taskToDeleteId
        ),
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
    { tasksArr, taskToDeleteId, errorMessage, isError },
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

  async function addTask(task) {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: task, isCompleted: 0 })
      });
      const data = await res.json();
      dispatch({ type: "SET_TASKS", payload: data });
    } catch (err) {
      console.error(err);
      dispatch({
        type: "ERROR",
        payload: "There was an error adding new task 😢"
      });
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasksArr,
        taskToDeleteId,
        errorMessage,
        isError,
        addTask
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

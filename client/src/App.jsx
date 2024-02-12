import { useEffect, useRef } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(json => {
        // upon success, update tasks
        console.log(json);
      })
      .catch(error => {
        // upon failure, show error message
      });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    addTask(inputRef.current.value);
    console.log(inputRef.current.value);
    inputRef.current.value = null;
  };

  async function addTask(task) {
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title: task, statusCompleted: 0 })
      });
      const data = await res.json();
      // do something with data
    } catch (err) {
      console.error(err);
    }
    // Continue fetch request here
  }

  const updateTask = id => {
    // update task from database
    // upon success, update tasks
    // upon failure, show error message
  };

  const deleteTask = id => {
    // delete task from database
    // upon success, update tasks
    // upon failure, show error message
  };

  return (
    <div>
      <h1>Fullstack Practice Todo App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          New Task:
          <input ref={inputRef} />
        </label>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef(null);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setTasks(json);
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
        body: JSON.stringify({ title: task, isCompleted: 0 })
      });
      const data = await res.json();
      setTasks(data);
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

  const taskTitles = tasks.map(task => task.title);

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
      <ul>
        {taskTitles.map(title => (
          <li>{title}</li>
        ))}
      </ul>
    </div>
  );
}

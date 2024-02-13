import React, { useRef } from "react";

import { useTasks } from "../contexts/TasksContext";

const Form = () => {
  const { addTask } = useTasks();

  const inputRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();

    addTask(inputRef.current.value);
    inputRef.current.value = null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input ref={inputRef} />
      </label>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;

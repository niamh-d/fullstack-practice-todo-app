import React from "react";

import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

const TasksList = () => {
  const { tasksArr } = useTasks();

  return (
    <div className="tasks-container">
      <ul className="task-list">
        {tasksArr.map(task => (
          <Task data={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;

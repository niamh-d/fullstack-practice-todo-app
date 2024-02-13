import React from "react";

import { useTasks } from "../contexts/TasksContext";

const TasksList = () => {
  const { tasksArr } = useTasks();

  return (
    <div>
      <ul>
        {tasksArr.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TasksList;

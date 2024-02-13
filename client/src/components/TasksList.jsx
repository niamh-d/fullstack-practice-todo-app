import React from "react";

import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

const TasksList = () => {
  const { tasksArr } = useTasks();

  return (
    <div>
      <ul>
        {tasksArr.map(task => (
          <Task key={task.id} title={task.title} id={task.id} />
        ))}
      </ul>
    </div>
  );
};

export default TasksList;

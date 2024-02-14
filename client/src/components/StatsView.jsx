import React from "react";

import StatsBars from "./StatsBars";
import StatsMessage from "./StatsMessage";

import { useTasks } from "../contexts/TasksContext";

function percentage(num1, num2) {
  return +((num1 / num2) * 100).toFixed(1);
}

const StatsView = () => {
  const { tasksArr, isError } = useTasks();

  const totalNumTasks = tasksArr.length;
  const numTasksCompleted = tasksArr.filter(task => task.completed).length;
  const numTasksNew = totalNumTasks - numTasksCompleted;

  const percentageCompleted = percentage(numTasksCompleted, totalNumTasks);
  const percentageNew = 100 - percentageCompleted;

  const stats = {
    totalNumTasks,
    numTasksCompleted,
    numTasksNew,
    percentageCompleted,
    percentageNew
  };

  console.log(stats);

  return (
    <div className={isError ? "invisible" : "stats-view"}>
      <StatsBars stats={stats} />
      <StatsMessage pcCompleted={percentageCompleted} />
    </div>
  );
};

export default StatsView;

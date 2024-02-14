import React from "react";

const Stats = ({ stats }) => {
  const {
    totalNumTasks,
    numTasksCompleted,
    numTasksNew,
    percentageCompleted,
    percentageNew
  } = stats;

  console.log(stats);

  return (
    <div>
      <div className="flex gap-3">
        <ul className="mt-5 mb-10 flex gap-3 flex-col">
          <li>
            <span className="mr-3">New:</span>
          </li>
          <li>
            <span className="mr-3 font-bold">Completed:</span>
          </li>
        </ul>
        <ul className="mt-5 mb-10 flex gap-3 flex-col">
          <li>
            <progress
              className="progress w-64"
              value={percentageNew}
              max="100"
            ></progress>
            <span className="ml-3">
              {percentageNew}% ({numTasksNew} / {totalNumTasks})
            </span>
          </li>
          <li>
            <progress
              className="progress progress-success w-64"
              value={percentageCompleted}
              max="100"
            ></progress>
            <span className="ml-3 font-bold">
              {percentageCompleted}% ({numTasksCompleted} / {totalNumTasks})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Stats;

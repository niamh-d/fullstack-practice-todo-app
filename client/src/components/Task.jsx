import React from "react";

import IconBox from "./IconsBox";

const Task = ({ data }) => {
  const { id, title, completed } = data;
  const style = completed ? "line-through" : null;
  return (
    <li className="task text-2xl">
      <span className={style}>{title}</span>{" "}
      <IconBox id={id} status={completed === 0} />
    </li>
  );
};

export default Task;

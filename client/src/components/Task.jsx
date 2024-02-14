import React from "react";

import IconBox from "./IconsBox";

const Task = ({ data }) => {
  console.log(data);
  const { id, title, completed } = data;
  const style = completed ? "line-through" : null;
  return (
    <li className="task">
      <span className={style}>{title}</span> <IconBox id={id} />
    </li>
  );
};

export default Task;

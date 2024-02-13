import React from "react";

import IconBox from "./IconsBox";

const Task = ({ title }) => {
  return (
    <li className="task">
      {title} <IconBox />
    </li>
  );
};

export default Task;

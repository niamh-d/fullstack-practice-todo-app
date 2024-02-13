import React from "react";

import IconBox from "./IconsBox";

const Task = ({ title, id }) => {
  return (
    <li className="task">
      {title} <IconBox id={id} />
    </li>
  );
};

export default Task;

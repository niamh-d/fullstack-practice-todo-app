import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";

import { useTasks } from "../contexts/TasksContext";

const IconsBox = ({ id }) => {
  const { deleteTask, completeTask } = useTasks();

  const deleteHandler = () => deleteTask(id);
  const completeHandler = () => completeTask(id);

  return (
    <div className="icons-box">
      <Tooltip title="Mark as completed">
        <DoneIcon onClick={completeHandler} />
      </Tooltip>
      <Tooltip title="Delete task">
        <DeleteForeverOutlinedIcon onClick={deleteHandler} />
      </Tooltip>
    </div>
  );
};

export default IconsBox;

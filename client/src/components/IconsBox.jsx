import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";
import HistoryIcon from "@mui/icons-material/History";

import { useTasks } from "../contexts/TasksContext";

const IconsBox = ({ id, status }) => {
  const { toggleDeleteId, updateTaskStatus } = useTasks();

  const deleteHandler = () => toggleDeleteId(id);
  const completeHandler = () => updateTaskStatus(id, 1);
  const revertHandler = () => updateTaskStatus(id, 0);

  return (
    <div className="icons-box">
      {status && (
        <Tooltip title="Mark as completed">
          <DoneIcon onClick={completeHandler} />
        </Tooltip>
      )}
      {!status && (
        <Tooltip title="Revert status">
          <HistoryIcon onClick={revertHandler} />
        </Tooltip>
      )}
      <Tooltip title="Delete task">
        <DeleteForeverOutlinedIcon onClick={deleteHandler} />
      </Tooltip>
    </div>
  );
};

export default IconsBox;

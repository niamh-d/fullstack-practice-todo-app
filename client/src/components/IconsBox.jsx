import React from "react";

import DoneIcon from "@mui/icons-material/Done";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import Tooltip from "@mui/material/Tooltip";

const IconsBox = () => {
  return (
    <div className="icons-box">
      <Tooltip title="Mark as completed">
        <DoneIcon />
      </Tooltip>
      <Tooltip title="Delete task">
        <DeleteForeverOutlinedIcon />
      </Tooltip>
    </div>
  );
};

export default IconsBox;

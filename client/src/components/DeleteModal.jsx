import React from "react";

import { useTasks } from "../contexts/TasksContext";

const DeleteModal = () => {
  const { toggleDeleteId, deleteTask } = useTasks();

  const unsetDeleteIdHandler = () => toggleDeleteId();
  const deleteTaskHandler = () => deleteTask();

  return (
    <dialog id="modal-delete" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Are you sure?</h3>
        <p className="py-4 text-xl">
          This destructive action cannot be undone. Choose wisely!...
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button
              className="btn btn-ghost text-sm mr-3 btn-sm"
              onClick={deleteTaskHandler}
            >
              Delete task
            </button>
            <button
              className="btn btn-secondary text-lg"
              onClick={unsetDeleteIdHandler}
            >
              Close me
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default DeleteModal;

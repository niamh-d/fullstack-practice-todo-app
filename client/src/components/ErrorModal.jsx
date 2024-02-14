import React from "react";

import { useTasks } from "../contexts/TasksContext";

const ErrorModal = ({ message }) => {
  const { errorMessage } = useTasks();

  return (
    <dialog id="modal-error" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box bg-error">
        <h3 className="font-bold text-2xl">Oops! My bad!</h3>
        <p className="py-4 text-xl">{errorMessage}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-neutral">Close me</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ErrorModal;

import React from "react";

const AddModal = () => {
  return (
    <dialog id="modal-add" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Added!</h3>
        <p className="py-4 text-lg">
          Your new task has been added! Now get to work!
        </p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-secondary">Close me</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddModal;

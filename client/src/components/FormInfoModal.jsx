import React from "react";

const FormInfoModal = () => {
  return (
    <dialog id="modal-form-info" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-2xl">Oops!</h3>
        <p className="py-4 text-xl">
          Your task needs a title of length 3 characters or greater. Please try
          again!
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

export default FormInfoModal;

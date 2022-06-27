import React, { useEffect } from "react";
import reactDom from "react-dom";
import { IoClose } from "react-icons/io5";

export function Notification({ changeModalVis, children }) {
  const modalRoot = document.getElementById("modal-root");
  const modal = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(modal);
    return () => {
      modalRoot.removeChild(modal);
    };
  }, [modal, modalRoot]);

  return reactDom.createPortal(
    <div className="z-50 fixed top-0 left-0 w-full flex justify-center items-center">
      <div className="flex bg-purple-700 text-white p-2 w-full justify-center rounded-md">
        <h1>{children}</h1>
        <button onClick={() => changeModalVis(false)}>
          <IoClose />
        </button>
      </div>
    </div>,
    modal
  );
}

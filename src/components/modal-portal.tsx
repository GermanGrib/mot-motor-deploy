import { ReactNode } from "react";
import { createPortal } from "react-dom";

const ModalPortal = ({ children }: { children: ReactNode }) => {
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    throw new Error(
      'Modal root element not found in the DOM. Create a div with id "modal-root".',
    );
  }

  return createPortal(children, modalRoot);
};

export default ModalPortal;

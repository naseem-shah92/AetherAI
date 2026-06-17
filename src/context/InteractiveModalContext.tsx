import React, { createContext, useContext, useState } from "react";

export type ModalType =
  | null
  | "signin"
  | "get_started"
  | "watch_demo"
  | "contact_sales"
  | "doc_reader"
  | "api_sandbox"
  | "status_report";

interface InteractiveModalContextType {
  activeModal: ModalType;
  modalPayload: any;
  openModal: (type: ModalType, payload?: any) => void;
  closeModal: () => void;
}

const InteractiveModalContext = createContext<InteractiveModalContextType | undefined>(undefined);

export const InteractiveModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [modalPayload, setModalPayload] = useState<any>(null);

  const openModal = (type: ModalType, payload: any = null) => {
    setActiveModal(type);
    setModalPayload(payload);
  };

  const closeModal = () => {
    setActiveModal(null);
    setModalPayload(null);
  };

  return (
    <InteractiveModalContext.Provider value={{ activeModal, modalPayload, openModal, closeModal }}>
      {children}
    </InteractiveModalContext.Provider>
  );
};

export const useInteractiveModals = () => {
  const context = useContext(InteractiveModalContext);
  if (!context) {
    throw new Error("useInteractiveModals must be used within an InteractiveModalProvider");
  }
  return context;
};

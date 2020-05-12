export type ModalContextType = {
  modalsState: ModalStateType[];
  setModalsState: (modal: ModalStateType[]) => void;
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
};

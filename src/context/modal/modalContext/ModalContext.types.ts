export type ModalContextType = {
  modalsState: ModalStateType[];
  setModalsState: React.Dispatch<React.SetStateAction<ModalStateType[]>>;
};

export type ModalStateType = {
  id: string;
  isOpen: boolean;
  options?: Record<string, unknown>;
};

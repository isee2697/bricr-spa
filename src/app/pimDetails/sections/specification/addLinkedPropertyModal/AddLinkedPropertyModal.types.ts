export type AddLinkedPropertyModalProps = {
  isOpened: boolean;
  onClose: () => void;
  onSubmit: () => void;
};

export type AddLinkedPropertyModalContainerProps = {
  isOpened: boolean;
  onClose: () => void;
};

export type LinkedPropertyType = {
  address: string;
  city: string;
};

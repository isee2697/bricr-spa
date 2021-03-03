import { LinkBusinessType } from 'app/shared/linkBusinessModal/LinkBusinessModal.types';

export type LinkedBusinessesContainerProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type LinkedBusinessesProps = {
  path: string;
  onSidebarOpen: VoidFunction;
  isSidebarVisible: boolean;
};

export type LinkedBusinessItem = {
  id: string;
  name: string;
  image: string;
  street: string;
  postalCode: string;
  city: string;
  phone: string;
  email: string;
  linkType: LinkBusinessType;
};

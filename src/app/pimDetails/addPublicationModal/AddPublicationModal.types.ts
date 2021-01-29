import { AddNewPublicationBody } from '../sections/publication/Publication.types';

export type AddPublicationModalProps = {
  onAddNewPublication: (values: AddNewPublicationBody) => Promise<void>;
};

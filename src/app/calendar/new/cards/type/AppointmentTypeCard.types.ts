import {
  LinkedPropertyModalContainerProps,
  PimListItem,
} from 'app/shared/linkedProperties/linkedPropertyModal/LinkedPropertyModal.types';
import { Pim } from 'api/types';

export type SelectPimModalProps = Omit<LinkedPropertyModalContainerProps, 'onClose'> & {
  selected: PimListItem[];
  onClose: (values: PimListItem[]) => void;
};

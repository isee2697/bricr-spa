import { DocumentOutsideItem } from '../../DocumentListOfCase.types';

export type DocumentFormRowDragObject = DocumentOutsideItem & {
  type: string;
};

export type DocumentFormRowProps = {
  item: DocumentOutsideItem;
  editing: boolean;
  index: number;
  onChangeOrder?: (dragItemId: number, targetId: number) => void;
  onDeleteItem?: (deleteItemId: number) => void;
};

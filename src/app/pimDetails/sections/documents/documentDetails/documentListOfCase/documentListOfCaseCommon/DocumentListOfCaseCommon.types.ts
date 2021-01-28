import { DocumentListOfCaseCard, DocumentOutsideItem, DocumentOutsideItemState } from '../DocumentListOfCase.types';

export type DocumentListOfCaseCommonProps = {
  cards: DocumentListOfCaseCard[];
  isSidebarVisible: boolean;
  onChangeOrder: (cardId: number, dragItemId: number, targetId: number) => void;
  onDeleteCard?: (cardId: number) => void;
  onDeleteItem: (cardId: number, deleteItemId: number) => void;
};

export interface DocumentFormProps {
  initOpened?: boolean;
  card?: DocumentListOfCaseCard;
  onChangeItemState?: (cardId: number, itemId: number, state: DocumentOutsideItemState) => Promise<boolean>;
  isSidebarVisible: boolean;
  onChangeOrder?: (dragItemId: number, targetId: number) => void;
  onDeleteCard?: (cardId: number) => void;
  onDeleteItem?: (deleteItemId: number) => void;
}

export type DocumentFormRowType = DocumentOutsideItem & {
  type: string;
  itemState: DocumentOutsideItemState;
};

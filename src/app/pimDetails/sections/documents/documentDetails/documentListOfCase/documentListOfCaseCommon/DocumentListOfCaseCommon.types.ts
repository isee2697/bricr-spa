import { DocumentListOfCaseCard, DocumentOutsideItemState } from '../DocumentListOfCase.types';

export interface DocumentFormProps {
  initOpened?: boolean;
  card?: DocumentListOfCaseCard;
  onChangeItemState?: (cardId: number, itemId: number, state: DocumentOutsideItemState) => Promise<boolean>;
}

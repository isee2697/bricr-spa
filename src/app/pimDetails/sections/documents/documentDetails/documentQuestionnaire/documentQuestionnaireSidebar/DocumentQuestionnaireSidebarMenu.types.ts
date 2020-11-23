import { DocumentQuestionnaireType } from '../DocumentQuestionnaire.types';

export type DocumentQuestionnaireSidebarMenuProps = {
  onHide: () => void;
  activeItem: number;
  onChangeStep: (index: number) => void;
  isVisible: boolean;
  data: DocumentQuestionnaireType;
};

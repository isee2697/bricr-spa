import { DocumentQuestionnaireType } from 'app/pimDetails/sections/documents/documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';

export type QuestionnaireConfigureItemsProps = {
  data: DocumentQuestionnaireType;
  onChangeStep: (index: number) => void;
};

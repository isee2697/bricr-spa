import { Profile } from 'api/types';
import { DocumentQuestionStepType } from '../../documentDetails/documentQuestionnaire/DocumentQuestionnaire.types';
import { DocumentKind } from '../General.types';

export type DocumentTimelineContainerProps = {
  type: DocumentKind;
};

export type DocumentTimelineProps = {
  type: DocumentKind;
  data: DocumentTimelineItem[];
};

export type DocumentTimelineItem = {
  users: Pick<Profile, 'firstName' | 'lastName' | 'image'>[];
  steps: DocumentQuestionStepType[];
  isActive: boolean;
};

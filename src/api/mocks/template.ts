import { Questionaire, TemplateStatus, TemplateType } from '../types';

export const QUESTIONAIRE: Questionaire = {
  companyId: '0001',
  entity: {
    type: 'questionnaire',
  },
  type: TemplateType.Questionnaire,
  id: '0001',
  isAdmin: true,
  published: false,
  templateName: 'test',
  templateStatus: TemplateStatus.Active,
  meta: {
    createdAt: new Date().toISOString(),
  },
};

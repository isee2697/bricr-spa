import { Questionaire } from '../types';

export const QUESTIONAIRE: Questionaire = {
  companyId: '0001',
  entity: {
    type: 'questionnaire',
  },
  id: '0001',
  isAdmin: true,
  published: false,
  templateName: 'test',
  isActive: true,
  meta: {
    createdAt: new Date().toISOString(),
  }
};

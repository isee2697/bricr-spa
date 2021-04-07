export type QuestionairesItemStepperProps = {
  steps: QuestionairesItemStep[];
};

export type QuestionairesItemStep = {
  step: QuestionairesItemStepStatus;
  date?: string;
  status?: 'completed' | 'active' | 'inactive';
};

export enum QuestionairesItemStepStatus {
  Invited = 'Invited',
  Started = 'Started',
  Completed = 'Completed',
  Frozen = 'Frozen',
}

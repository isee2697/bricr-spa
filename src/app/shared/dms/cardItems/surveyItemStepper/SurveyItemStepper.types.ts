export type SurveyStepperProps = {
  steps: SurveyStep[];
};

export type SurveyStep = {
  step: SurveyStepStatus;
  date?: string;
  status?: 'completed' | 'active' | 'inactive';
};

export enum SurveyStepStatus {
  Invited = 'Invited',
  Started = 'Started',
  Completed = 'Completed',
}

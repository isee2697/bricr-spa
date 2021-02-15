import { DateTime } from 'luxon';

export type StatusTimelineStep = {
  id: string;
  date: DateTime;
  title: string;
  isComplete?: boolean;
  isProject?: boolean;
  steps?: PropertyStep[];
  projectSteps?: ProjectStepGroup[];
};

export type PropertyStep = {
  image: string;
  isComplete: boolean;
};

export type ProjectStepGroup = {
  title: string;
  isComplete: boolean;
  message?: string;
  items?: ProjectStepGroupItem[];
};

export type ProjectStepGroupItem = {
  title: string;
  isComplete: boolean;
  message?: string;
  subItems?: ProjectStepGroupSubItem[];
};

export type ProjectStepGroupSubItem = {
  title: string;
  isComplete: boolean;
  message?: string;
};

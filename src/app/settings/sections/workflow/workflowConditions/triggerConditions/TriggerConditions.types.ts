import { ReactNode } from 'react';
import { AnyObject } from 'final-form';
import { GridSize } from '@material-ui/core';

export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type TriggerConditionsTypes = {
  key: string;
  type: string;
  size: GridSize;
  options?: CheckboxDataType[];
  from?: number;
  to?: number;
};

export type TriggerConditionsProps = {
  title?: string;
  isOpened: boolean;
  activeTab: number;
  onClose: () => void;
  onSubmit: (body: AnyObject, amount: number) => void;
  onTabChange: (index: number) => void;
  data?: AnyObject;
  conditionAmount?: number;
  conditionsTypes: TriggerConditionsTypes[];
};

export type ConditionSidenavProps = {
  conditions: TriggerConditionsTypes[];
  selectedConditions?: AnyObject;
  onChange: (index: number) => void;
};

export type ConditionTabPanelProps = {
  conditionType: string;
  children: ReactNode;
  activeTab: number;
  id: number;
};

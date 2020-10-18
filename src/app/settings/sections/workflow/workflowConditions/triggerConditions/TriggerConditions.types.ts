import { ReactNode } from 'react';
import { GridSize } from '@material-ui/core';

export enum Sizes {
  M = 6,
  L = 12,
}

export enum Types {
  Criteria = 'criteria',
  Range = 'range',
  Checkbox = 'checkbox',
  RadioButton = 'radioButton',
}

/** Trigger conditions values type  */
export type CriteriaConditionType = {
  criteria?: string;
  value?: string;
  is_exact_same?: boolean;
};
export type OriginConditionType = string[];
export type TimeConditionType = string;
export type OtherConditionType = string;
export type IncomingConditionType = {
  trigger_type?: CriteriaConditionType;
  other_type?: OtherConditionType;
  origin_type?: OriginConditionType;
  time?: TimeConditionType;
};

export type GeneralConditionType = IncomingConditionType;

export type TriggerConditionValuesType = IncomingConditionType | GeneralConditionType;

/** Trigger conditions types */
export type CheckboxDataType = {
  label: string;
  icon: ReactNode;
  value: string;
};

export type TriggerConditionsTypes = {
  key: 'trigger_type' | 'origin_type' | 'time' | 'other_type';
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
  onSubmit: (body: TriggerConditionValuesType) => void;
  onTabChange: (index: number) => void;
  data?: TriggerConditionValuesType;
  conditionsTypes: TriggerConditionsTypes[];
};

export type ConditionSidenavProps = {
  conditions: TriggerConditionsTypes[];
  selectedConditions?: TriggerConditionValuesType;
  onChange: (index: number) => void;
};

export type ConditionTabPanelProps = {
  conditionType: string;
  children: ReactNode;
  activeTab: number;
  id: number;
};

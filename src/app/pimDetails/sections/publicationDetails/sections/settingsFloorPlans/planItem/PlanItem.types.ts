import { SettingsFloorPlanItem } from '../SettingsFloorPlans.types';

export type PlanItemProps = SettingsFloorPlanItem & {
  isAdded?: boolean;
  onRemoveFromList?: (item: SettingsFloorPlanItem) => void;
  onChangeOrder?: (source: SettingsFloorPlanItem, target: SettingsFloorPlanItem) => void;
};

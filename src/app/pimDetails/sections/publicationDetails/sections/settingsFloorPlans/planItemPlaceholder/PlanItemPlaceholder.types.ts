import { SettingsFloorPlanItem } from '../SettingsFloorPlans.types';

export type PlanItemPlaceholderDragObject = {
  type: string;
  item: SettingsFloorPlanItem;
};

export type PlanItemPlaceholderProps = {
  onAddItemToAddedList: (item: SettingsFloorPlanItem) => void;
};

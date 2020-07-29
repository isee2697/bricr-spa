import { InspectionType, TankType, PollutionType, MaintenanceType } from 'api/types';

export type AddInspectionModalContainerProps = {
  isOpened: boolean;
  onClose: (id?: string) => void;
  type: InspectionType;
  onAddCustomType: VoidFunction;
};

export type AddInspectionValues = {
  inspection: TankType | PollutionType | MaintenanceType;
};

export type AddInspectionModalProps = AddInspectionModalContainerProps & {
  onSubmit: (values: AddInspectionValues) => {};
};

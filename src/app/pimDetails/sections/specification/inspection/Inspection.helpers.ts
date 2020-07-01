import { InspectionType, LabelProperty } from 'api/types';

export const typeToLabelProperty = (type: InspectionType): LabelProperty => {
  switch (type) {
    case InspectionType.Maintenance:
      return LabelProperty.MaintenanceInspection;
    case InspectionType.Pollution:
      return LabelProperty.PollutionInspection;
    case InspectionType.Tanks:
      return LabelProperty.TankInspection;

    default:
      throw Error("There's no such an InspectionType");
  }
};

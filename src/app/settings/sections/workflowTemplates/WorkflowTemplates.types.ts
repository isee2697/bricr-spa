import { SettingHeaderCommonProps } from 'app/settings/settingsHeader/SettingsHeader.types';
import { Profile } from 'api/types';

export type WorkflowTemplatesProps = SettingHeaderCommonProps & {
  dateUpdated: string | null | undefined;
  updatedBy: Profile | null | undefined;
};

export enum WorkflowBluePrints {
  NewOrderAcquisition = 'NewOrderAcquisition',
  SaleRentProperty = 'SaleRentProperty',
  PurchaseProperty = 'PurchaseProperty',
  ReletProcess = 'ReletProcess',
  NewConstructionProcess = 'NewConstructionProcess',
}

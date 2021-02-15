import { AllocateType } from '../allocateTypeModal/AllocateTypeModal.types';

export enum AdminSettingsType {
  Residential = 'Residential',
  NewConstruction = 'NewConstruction',
  Relet = 'Relet',
  Commercial = 'Commercial',
  CommercialBuilding = 'CommercialBuilding',
  Agriculture = 'Agriculture',
  Parkinglot = 'Parkinglot',
  BuildingPlot = 'BuildingPlot',
}

export enum ThisPropertyType {
  Base = 'Base',
  Special = 'Special',
  MidSegment = 'MidSegment',
}

export type AllocateTypeDetailsModalProps = {
  allocateType: AllocateType;
  onClose: VoidFunction;
  onPrev: VoidFunction;
  onNext: (settings: string[]) => void;
  isOpen: boolean;
};

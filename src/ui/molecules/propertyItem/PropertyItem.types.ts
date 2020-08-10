import { PropertyStageItem } from 'ui/molecules/propertyStage/PropertyStage.types';

export type PropertyItemProps = {
  title: string;
  image?: string;
  date: string;
  labels: string[];
  discountPrice?: number;
  salePrice?: number | null;
  rentPrice?: number | null;
  alert?: string;
  status?: string;
  categories: string[];
  isArchived?: boolean | undefined;
  completeness?: number;
  stageItems?: PropertyStageItem[];
  stageIndex?: number;
  formerOwners?: string;
  buyers?: string;
  onMenuClick: () => void;
};

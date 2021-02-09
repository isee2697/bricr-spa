import { MatchRequirementStatus, MatchRequirementType } from 'api/types';

export type ExtrasColumnItems = {
  [MatchRequirementStatus.Required]: MatchRequirementType[];
  [MatchRequirementStatus.Desirable]: MatchRequirementType[];
  [MatchRequirementStatus.NotSignificant]: MatchRequirementType[];
};

export type ExtrasColumnProps = {
  isEditable: boolean;
  columnType: MatchRequirementStatus;
  items: MatchRequirementType[];
  onUpdateExtraItemStatus: (item: MatchRequirementType, status: MatchRequirementStatus) => void;
};

export type ExtrasColumnItemProps = {
  isEditable: boolean;
  item: MatchRequirementType;
  noMargin?: boolean;
};

export type ExtrasPlaceholderProps = {
  isFirst?: boolean;
};

export type ExtrasItemDragObject = {
  type: MatchRequirementStatus;
  item: MatchRequirementType;
};

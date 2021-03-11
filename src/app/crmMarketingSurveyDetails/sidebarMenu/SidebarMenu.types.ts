import { MarketingSurveyDetailsType } from '../MarketingSurveyDetails.types';

export type SidebarMenuProps = {
  onHide: () => void;
  activeItem: number;
  onChangeStep: (index: number) => void;
  isVisible: boolean;
  data: MarketingSurveyDetailsType;
};

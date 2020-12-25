import { SignBoardSetting } from '../SignBoard.types';

export type SettingsListProps = {
  settings: SignBoardSetting[];
};

export enum SettingsListStatus {
  Active = 'Active',
  Placed = 'Placed',
}

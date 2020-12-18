import { KeyBoardSetting } from '../Keyboard.types';

export type SettingsListProps = {
  settings: KeyBoardSetting[];
};

export enum SettingsListStatus {
  Active = 'Active',
  Lent = 'Lent',
  Inactive = 'Inactive',
}

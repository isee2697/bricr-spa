import { PromiseFunction } from 'app/shared/types';

export type GeneralPageSettingsContainerProps = {
  title: string;
};

export type GeneralPageSettingsProps = GeneralPageSettingsContainerProps & {
  onSave: PromiseFunction<void>;
};

export enum Languages {
  English = 'English',
  Dutch = 'Dutch',
}

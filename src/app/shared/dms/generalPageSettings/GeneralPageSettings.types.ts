import { LastUpdatedProfile } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type GeneralPageSettingsProps = {
  types: string[];
  title: string;
  onSave: PromiseFunction<void>;
  updatedBy?: LastUpdatedProfile | null;
  dateUpdated?: string | null;
};

export enum Languages {
  English = 'English',
  Dutch = 'Dutch',
}

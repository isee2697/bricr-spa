import { KikSettings, KikSettingsInput } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type CadastreSettingsProps = {
  data?: KikSettings;
  onSave: PromiseFunction<KikSettingsInput>;
};

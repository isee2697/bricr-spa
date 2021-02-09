import { MatchProfile } from 'api/types';
import { PromiseFunction } from 'app/shared/types';

export type GeneralProps = {
  onSave: PromiseFunction<MatchProfile>;
};

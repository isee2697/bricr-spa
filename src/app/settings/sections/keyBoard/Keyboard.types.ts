import { DateTime } from 'luxon';

import { PromiseFunction } from 'app/shared/types';

export type KeyBoardProps = {
  onSave: PromiseFunction<void>;
  keyBoardSettings: KeyBoardSetting[];
};

export type KeyBoardSetting = {
  startNumber: string;
  to: string;
  object: string;
  lentDate: DateTime;
};

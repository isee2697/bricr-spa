import { DateTime } from 'luxon';

import { PromiseFunction } from 'app/shared/types';

export type SignBoardProps = {
  onSave: PromiseFunction<void>;
  signBoardSettings: SignBoardSetting[];
};

export type SignBoardSetting = {
  number: string;
  object: string;
  typeOfSign: TypeOfSign;
  dateSold?: DateTime;
  datePlace: DateTime;
  dateRemove: DateTime;
  datePlaced: DateTime;
};

export enum TypeOfSign {
  Flag = 'Flag',
  Triangle = 'Triangle',
}

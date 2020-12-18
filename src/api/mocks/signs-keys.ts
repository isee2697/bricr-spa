import { DateTime } from 'luxon';

import { KeyBoardSetting } from 'app/settings/sections/keyBoard/Keyboard.types';

export const PIM_SUMMARY_KEY = {
  number: 'h-2345',
  to: 'C. can Gils',
  description:
    'Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken.',
};

export const KEY_BOARD_SETTING: KeyBoardSetting[] = [
  {
    startNumber: '1234',
    to: 'C van Gils',
    object: 'Isenburgstraat 36, Breda, Netherlands',
    lentDate: DateTime.local(),
  },
];

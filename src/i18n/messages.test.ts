import { AppLocale } from '../context/locale/AppLocale.enum';

import { translations } from './messages';

test('has object entries for all locales', () => {
  Object.entries(translations).map(language => {
    expect(Object.values(language).length > 50).toBeTruthy();
  });
});

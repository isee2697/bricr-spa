import { translations } from './messages';

test.only('has object entries for all locales', () => {
  Object.values(translations).map(language => {
    expect(Object.values(language).length > 50).toBeTruthy();
  });
});

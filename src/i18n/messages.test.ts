import { translations } from './messages';

test('has object entries for all locales', () => {
  Object.values(translations).map(language => {
    expect(Object.values(language).length > 50).toBeTruthy();
  });
});

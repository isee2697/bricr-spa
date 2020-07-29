import { urlValidator } from 'form/validators/urlValidator/urlValidator';

describe('Url form validator', () => {
  const validUrls = [
    'http://gooole.com',
    'https://gooole.com',
    'www.google.com',
    'google.com',
    'http://www.gooole.com',
    'https://www.gooole.com',
  ];

  const invalidUrls = [
    'www.goo gle.com',
    'random text',
    'https://goo/ole.com',
    'https:gooole.com',
    'https:/gooole.com',
  ];

  it('return undefined on valid urls', () => {
    validUrls.map(url => {
      expect(urlValidator(url)).toEqual(undefined);

      return '';
    });
  });

  it('return error message on string which are not urls', () => {
    invalidUrls.map(url => {
      expect(urlValidator(url)).toEqual({ id: 'validation.url' });

      return '';
    });
  });
});

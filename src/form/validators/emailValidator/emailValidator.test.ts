import { emailValidator } from 'form/validators/emailValidator/emailValidator';

describe('Email form validator', () => {
  const validEmails = ['', 'foo@example.com', 'FOO@EXAMPLE.COM'];

  const invalidEmails = ['www.google.com', 'random text', 'foo@example.com.'];

  it('return undefined for valid emails', () => {
    validEmails.map(email => {
      expect(emailValidator(email)).toEqual(undefined);

      return '';
    });
  });

  it('return error message for invalid emails', () => {
    invalidEmails.map(email => {
      expect(emailValidator(email)).toEqual({ id: 'validation.email' });

      return '';
    });
  });
});

import { dateValidator } from 'form/validators/dateValidator/dateValidator';

describe('requireValidator tests', () => {
  it('pass validation when value is correct string', () => {
    expect(dateValidator('2020-06-25T09:44:00.000+02:00')).toBe(undefined);
  });

  it('pass validation when value is 0', () => {
    expect(dateValidator('2020-30-25T09:44:00.000+02:00')).toEqual({ id: 'validation.invalid_date' });
  });
});

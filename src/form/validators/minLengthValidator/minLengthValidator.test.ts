import { minLengthValidator } from './minLengthValidator';

describe('minLengthValidator tests', () => {
  it('fail validation when value have not enough length', () => {
    const validator = minLengthValidator(10);
    expect(validator('test')).toEqual({ id: 'validation.min_length', values: { length: 10 } });
  });

  it('pass validation when value is correct length string', () => {
    const validator = minLengthValidator(2);
    expect(validator('test')).toBe(undefined);
  });
});

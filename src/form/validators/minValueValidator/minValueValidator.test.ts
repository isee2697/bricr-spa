import { minValueValidator } from 'form/validators/minValueValidator/minValueValidator';

describe('minValueValidator tests', () => {
  it('fail validation when value have not enough value', () => {
    const validator = minValueValidator(10);
    expect(validator(9)).toEqual({ id: 'validation.min_value', values: { value: 10 } });
  });

  it('pass validation when value is correct value', () => {
    const validator = minValueValidator(10);
    expect(validator(10)).toBe(undefined);
  });
});

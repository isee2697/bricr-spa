import { fieldMatchValidator } from './fieldMatchValidator';

describe('fieldMatchValidator tests', () => {
  it('fails validation when value is not the same as provided field', () => {
    expect(fieldMatchValidator('second', 'test')('test', { second: 'test2' })).toEqual({ id: 'test' });
  });

  it('passes validation when value is the same as provided field', () => {
    expect(fieldMatchValidator('second', 'test')('test', { second: 'test' })).toBe(undefined);
  });
});

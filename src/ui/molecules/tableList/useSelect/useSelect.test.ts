import { renderHook, act } from '@testing-library/react-hooks';

import { useSelect } from './useSelect';

describe('useSelect', () => {
  const items = [{ foo: 'bar' }, { foo: 'baz' }];
  const itemIndex = 'foo';

  test('selects element when handleCheck fired', async () => {
    const { result } = renderHook(() => useSelect(items, itemIndex));

    act(() => {
      result.current.handleCheck('bar');
    });

    expect(result.current.checkedKeys).toEqual(['bar']);
    expect(result.current.checkAllStatus).toEqual({ indeterminate: true, checked: true });
  });

  test('(de)selects all elements when handleCheckAll fired', async () => {
    const { result } = renderHook(() => useSelect(items, itemIndex));

    act(() => {
      result.current.handleCheck('bar');
      result.current.handleCheckAll();
    });

    expect(result.current.checkedKeys).toEqual(['bar', 'baz']);
    expect(result.current.checkAllStatus).toEqual({ indeterminate: false, checked: true });

    act(() => {
      result.current.handleCheckAll();
    });

    expect(result.current.checkedKeys).toEqual([]);
    expect(result.current.checkAllStatus).toEqual({ indeterminate: false, checked: false });
  });
});

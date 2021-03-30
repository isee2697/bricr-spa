import { renderHook } from '@testing-library/react-hooks';
import { act } from 'react-test-renderer';
import { useState as mockUseState } from 'react';

import { usePagination } from './usePagination';

const PARAMS = { itemsCount: 100, perPageOptions: [10, 25, 'All' as const] };

jest.mock('use-query-params', () => ({
  useQueryParam: () => mockUseState(null),
}));

describe('usePagination', () => {
  it('returns correct page count and query params, based on different per page options', () => {
    const { result } = renderHook(() => usePagination(PARAMS));

    expect(result.current.pagination.count).toBe(10);
    expect(result.current.query).toEqual({ from: 0, limit: 10, page: 1 });

    act(() => {
      result.current.pagination.onPerPageChange(25);
      result.current.pagination.onChange(null, 2);
    });

    expect(result.current.pagination.count).toBe(4);
    expect(result.current.query).toEqual({ from: 25, limit: 25, page: 1 });

    act(() => {
      result.current.pagination.onPerPageChange('All');
    });

    expect(result.current.pagination.count).toBe(1);
    expect(result.current.query).toEqual({ from: 0, limit: undefined, page: 1 });
  });

  it('clears current page, when changing per page', () => {
    const { result } = renderHook(() => usePagination(PARAMS));

    expect(result.current.pagination.page).toBe(1);

    act(() => {
      result.current.pagination.onChange(null, 3);
    });

    expect(result.current.pagination.page).toBe(3);

    act(() => {
      result.current.pagination.onPerPageChange(25);
    });

    expect(result.current.pagination.page).toBe(1);
  });
});
